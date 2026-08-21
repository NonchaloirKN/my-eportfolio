import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath("/draco/");
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = (): Promise<GLTF | null> => {
    return new Promise((resolve, reject) => {
      const modelPath = "/models/character.glb";
      console.log("Loading raw GLB model directly from:", modelPath);

      loader.load(
        modelPath,
        async (gltf: GLTF) => {
          console.log("GLTF model loaded successfully:", gltf);
          const character = gltf.scene;

          try {
            await renderer.compileAsync(character, camera, scene);
          } catch (e) {
            console.warn("compileAsync warning:", e);
          }

          character.traverse((child: THREE.Object3D) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              mesh.castShadow = false;
              mesh.receiveShadow = false;
              mesh.frustumCulled = false;
              if (mesh.material && !Array.isArray(mesh.material)) {
                (mesh.material as THREE.ShaderMaterial).precision = "mediump";
              }
            }
          });

          resolve(gltf);
          setCharTimeline(character, camera);
          setAllTimeline();

          setTimeout(() => {
            ScrollTrigger.refresh();
          }, 150);

          const footR = character.getObjectByName("footR");
          const footL = character.getObjectByName("footL");
          if (footR) footR.position.y = 3.36;
          if (footL) footL.position.y = 3.36;
          dracoLoader.dispose();
        },
        (xhr) => {
          if (xhr.lengthComputable) {
            console.log(`Model progress: ${(xhr.loaded / xhr.total) * 100}%`);
          }
        },
        (error: unknown) => {
          console.error("Error loading raw GLTF model:", error);
          reject(error);
        }
      );
    });
  };

  return { loadCharacter };
};

export default setCharacter;
