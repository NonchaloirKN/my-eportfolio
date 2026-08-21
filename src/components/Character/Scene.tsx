import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import setCharacter from "./utils/character";
import setLighting from "./utils/lighting";
import { useLoading } from "../../context/LoadingProvider";
import handleResize from "./utils/resizeUtils";
import {
  handleMouseMove,
  handleTouchEnd,
  handleHeadRotation,
  handleTouchMove,
} from "./utils/mouseUtils";
import setAnimations from "./utils/animationUtils";
import { setProgress } from "../Loading";
import "./styles/Scene.css";

const Scene = () => {
  const canvasDiv = useRef<HTMLDivElement | null>(null);
  const hoverDivRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();
  const [, setChar] = useState<THREE.Object3D | null>(null);
  const [webGLAvailable, setWebGLAvailable] = useState<boolean>(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const currentCanvas = canvasDiv.current;
    if (!currentCanvas) return;

    // Clean up any stale canvas elements from previous mounts
    while (currentCanvas.firstChild) {
      if (currentCanvas.firstChild === hoverDivRef.current) break;
      currentCanvas.removeChild(currentCanvas.firstChild);
    }

    let renderer: THREE.WebGLRenderer | null = null;
    const progress = setProgress((value) => setLoading(value));

    // Safety timeout to ensure loading screen never hangs
    const safetyTimeout = setTimeout(() => {
      progress.clear();
    }, 4000);

    // Test WebGL Context Creation
    const testCanvas = document.createElement("canvas");
    let glContext: RenderingContext | null = null;
    try {
      glContext =
        testCanvas.getContext("webgl2", { failIfMajorPerformanceCaveat: false, powerPreference: "default" }) ||
        testCanvas.getContext("webgl", { failIfMajorPerformanceCaveat: false, powerPreference: "default" }) ||
        testCanvas.getContext("experimental-webgl", { failIfMajorPerformanceCaveat: false, powerPreference: "default" });
    } catch {
      glContext = null;
    }

    if (!glContext) {
      console.warn("WebGL unavailable in browser context. Activating interactive 3D avatar fallback.");
      setWebGLAvailable(false);
      clearTimeout(safetyTimeout);
      progress.clear();
      return;
    }

    try {
      const rect = currentCanvas.getBoundingClientRect();
      const container = {
        width: rect.width || window.innerWidth,
        height: rect.height || window.innerHeight,
      };
      const aspect = container.width / container.height;

      // Dedicated scene instance
      const scene = new THREE.Scene();

      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: window.devicePixelRatio < 2,
        powerPreference: "default",
        failIfMajorPerformanceCaveat: false,
      });
      renderer.setSize(container.width, container.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      currentCanvas.appendChild(renderer.domElement);

      const camera = new THREE.PerspectiveCamera(14.5, aspect, 0.1, 1000);
      camera.position.set(0, 13.1, 24.7);
      camera.zoom = 1.1;
      camera.updateProjectionMatrix();

      let headBone: THREE.Object3D | null = null;
      let screenLight: THREE.Object3D | null = null;
      let mixer: THREE.AnimationMixer | null = null;
      const clock = new THREE.Clock();

      const light = setLighting(scene);
      const { loadCharacter } = setCharacter(renderer, scene, camera);

      let loadedCharacter: THREE.Object3D | null = null;

      loadCharacter()
        .then((gltf) => {
          if (gltf) {
            clearTimeout(safetyTimeout);
            const animations = setAnimations(gltf);
            if (hoverDivRef.current) {
              animations.hover(gltf, hoverDivRef.current);
            }
            mixer = animations.mixer;
            loadedCharacter = gltf.scene;
            setChar(loadedCharacter);
            scene.add(loadedCharacter);
            headBone = loadedCharacter.getObjectByName("spine006") || null;
            screenLight = loadedCharacter.getObjectByName("screenlight") || null;

            light.turnOnLights();
            animations.startIntro();

            // Signal loader progress to 100%
            progress.loaded();

            window.addEventListener("resize", () => {
              if (renderer && canvasDiv.current && loadedCharacter) {
                handleResize(renderer, camera, canvasDiv, loadedCharacter);
              }
            });
          }
        })
        .catch((err) => {
          console.warn("Character model loading fallback:", err);
          progress.clear();
        });

      let mouse = { x: 0, y: 0 },
        interpolation = { x: 0.1, y: 0.2 };

      const onMouseMove = (event: MouseEvent) => {
        handleMouseMove(event, (x, y) => {
          mouse = { x, y };
          setMousePos({ x, y });
        });
      };
      let debounce: number | undefined;
      const onTouchStart = (event: TouchEvent) => {
        const element = event.target as HTMLElement;
        debounce = window.setTimeout(() => {
          element?.addEventListener("touchmove", (e: TouchEvent) =>
            handleTouchMove(e, (x, y) => (mouse = { x, y }))
          );
        }, 200);
      };

      const onTouchEnd = () => {
        handleTouchEnd((x, y, interpolationX, interpolationY) => {
          mouse = { x, y };
          interpolation = { x: interpolationX, y: interpolationY };
        });
      };

      document.addEventListener("mousemove", onMouseMove, { passive: true });
      const landingDiv = document.getElementById("landingDiv");
      if (landingDiv) {
        landingDiv.addEventListener("touchstart", onTouchStart, { passive: true });
        landingDiv.addEventListener("touchend", onTouchEnd, { passive: true });
      }

      let reqId: number;
      const animate = () => {
        reqId = requestAnimationFrame(animate);

        if (headBone) {
          handleHeadRotation(
            headBone,
            mouse.x,
            mouse.y,
            interpolation.x,
            interpolation.y,
            THREE.MathUtils.lerp
          );
          light.setPointLight(screenLight);
        }
        const delta = clock.getDelta();
        if (mixer) {
          mixer.update(delta);
        }
        if (renderer) {
          renderer.render(scene, camera);
        }
      };
      animate();

      return () => {
        clearTimeout(safetyTimeout);
        clearTimeout(debounce);
        cancelAnimationFrame(reqId);
        if (mixer) {
          mixer.stopAllAction();
        }
        scene.clear();
        renderer?.dispose();
        if (currentCanvas && renderer?.domElement && currentCanvas.contains(renderer.domElement)) {
          currentCanvas.removeChild(renderer.domElement);
        }
        document.removeEventListener("mousemove", onMouseMove);
        if (landingDiv) {
          landingDiv.removeEventListener("touchstart", onTouchStart);
          landingDiv.removeEventListener("touchend", onTouchEnd);
        }
      };
    } catch (err) {
      console.warn("WebGL initialization failed:", err);
      setWebGLAvailable(false);
      clearTimeout(safetyTimeout);
      progress.clear();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Global mousemove tracker for fallback interactive parallax
  useEffect(() => {
    if (!webGLAvailable) {
      const handleDocMouseMove = (e: MouseEvent) => {
        const x = (e.clientX / window.innerWidth - 0.5) * 2;
        const y = (e.clientY / window.innerHeight - 0.5) * 2;
        setMousePos({ x, y });
      };
      window.addEventListener("mousemove", handleDocMouseMove, { passive: true });
      return () => window.removeEventListener("mousemove", handleDocMouseMove);
    }
  }, [webGLAvailable]);

  return (
    <div className="character-container">
      {webGLAvailable ? (
        <div className="character-model" ref={canvasDiv}>
          <div className="character-rim"></div>
          <div className="character-hover" ref={hoverDivRef}></div>
        </div>
      ) : (
        <div className="character-fallback-wrapper">
          <div
            className="character-fallback-card"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x * 12}deg) rotateX(${-mousePos.y * 10}deg) translateY(-50%) translateX(-50%)`,
            }}
          >
            <div className="character-fallback-aura"></div>
            <img
              src={`${import.meta.env.BASE_URL.replace(/\/$/, "")}/images/kiyuran_avatar_3d.png`}
              alt="Kiyuran Naidoo"
              className="character-fallback-img"
              loading="eager"
            />
            <div className="character-fallback-pedestal"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Scene;
