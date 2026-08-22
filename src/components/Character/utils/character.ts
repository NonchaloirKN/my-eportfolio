import * as THREE from "three";
import { DRACOLoader, GLTF, GLTFLoader } from "three-stdlib";
import { setCharTimeline, setAllTimeline } from "../../utils/GsapScroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const setCharacter = (
  renderer: THREE.WebGLRenderer,
  scene: THREE.Scene,
  camera: THREE.PerspectiveCamera
) => {
  const baseUrl = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;

  const loader = new GLTFLoader();
  const dracoLoader = new DRACOLoader();
  dracoLoader.setDecoderPath(`${baseUrl}draco/`);
  loader.setDRACOLoader(dracoLoader);

  const loadCharacter = (): Promise<GLTF | null> => {
    return new Promise((resolve, reject) => {
      const modelPath = `${baseUrl}models/character.glb`;
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
                const material = mesh.material as THREE.MeshStandardMaterial;

                // Clone materials to prevent shared reference bugs across parts
                mesh.material = material.clone();
                const newMat = mesh.material as THREE.MeshStandardMaterial;
                newMat.precision = "mediump";

                const nodeName = (child.name || "").toLowerCase();
                const matName = (newMat.name || "").toLowerCase();

                // Personalise shirt with iconic UCT Blue
                if (
                  nodeName.includes("shirt") ||
                  nodeName.includes("top") ||
                  matName.includes("shirt") ||
                  matName.includes("top")
                ) {
                  newMat.color.setHex(0x005596); // UCT Blue
                }
                // Personalise pants / jacket / hoodie with Deep Slate
                else if (
                  nodeName.includes("pant") ||
                  nodeName.includes("jacket") ||
                  nodeName.includes("hoodie") ||
                  matName.includes("pant") ||
                  matName.includes("jacket")
                ) {
                  newMat.color.setHex(0x0f172a); // Slate Black
                }
                // Personalise footwear & accessories with Electric Cyan Glow
                else if (
                  nodeName.includes("shoe") ||
                  nodeName.includes("sole") ||
                  nodeName.includes("headphone") ||
                  matName.includes("shoe")
                ) {
                  newMat.emissive.setHex(0x00e5ff); // Cyan Glow
                  newMat.emissiveIntensity = 0.8;
                }

                // Enhance skin and overall material rendering
                newMat.roughness = 0.4;
                newMat.metalness = 0.2;
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
