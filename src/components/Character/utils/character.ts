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

                // =========================================================================
                // 🎨 3D AVATAR APPEARANCE CUSTOMISATION PLAYGROUND
                // =========================================================================
                // You can modify any material property on the character's meshes below:
                // 
                // 1. CLOTHING & TEXTURE COLOURS:
                //    - Change `newMat.color.setHex(0xHEXCODE)` to any RGB hex value.
                //    - Examples:
                //      * UCT Royal Blue:  0x005596
                //      * Electric Cyan:   0x00e5ff
                //      * Emerald Green:   0x10b981
                //      * Cyberpunk Purple:0x8b5cf6
                //      * Slate Charcoal:  0x0f172a
                //      * Pure White:      0xffffff
                //
                // 2. EMISSIVE GLOW EFFECTS (Shoes, Headphones, Neon Accents):
                //    - `newMat.emissive.setHex(0x00e5ff)` -> sets glow color
                //    - `newMat.emissiveIntensity = 0.8`   -> adjust brightness (0.0 to 3.0+)
                //
                // 3. SURFACE FINISH / SHADER PROPERTIES:
                //    - `newMat.roughness = 0.4` -> 0.0 (mirror-like glossy) to 1.0 (matte fabric)
                //    - `newMat.metalness = 0.2` -> 0.0 (dielectric cloth/skin) to 1.0 (metallic armor)
                //    - `newMat.wireframe = true`-> enable wireframe mode for a holographic effect!
                //    - `newMat.opacity = 0.8`   -> set transparency (requires `newMat.transparent = true`)
                //
                // 4. IDENTIFYING MESH NAMES:
                //    - `child.name` contains GLTF node names (e.g. "Wolf3D_Avatar", "Wolf3D_Outfit_Top",
                //      "Wolf3D_Outfit_Bottom", "Wolf3D_Outfit_Footwear", "Wolf3D_Headwear", "Wolf3D_Body")
                // =========================================================================

                // Clone materials to prevent shared reference bugs across parts
                mesh.material = material.clone();
                const newMat = mesh.material as THREE.MeshStandardMaterial;
                newMat.precision = "mediump";

                const nodeName = (child.name || "").toLowerCase();
                const matName = (newMat.name || "").toLowerCase();

                // 👕 Upper Body / Shirt / Top:
                if (
                  nodeName.includes("shirt") ||
                  nodeName.includes("top") ||
                  matName.includes("shirt") ||
                  matName.includes("top")
                ) {
                  newMat.color.setHex(0x005596); // UCT Blue (Change here!)
                }
                // 👖 Lower Body / Pants / Jacket:
                else if (
                  nodeName.includes("pant") ||
                  nodeName.includes("jacket") ||
                  nodeName.includes("hoodie") ||
                  matName.includes("pant") ||
                  matName.includes("jacket")
                ) {
                  newMat.color.setHex(0x0f172a); // Slate Black (Change here!)
                }
                // 👟 Footwear / Accessories / Glow Accents:
                else if (
                  nodeName.includes("shoe") ||
                  nodeName.includes("sole") ||
                  nodeName.includes("headphone") ||
                  matName.includes("shoe")
                ) {
                  newMat.emissive.setHex(0x00e5ff); // Electric Cyan Glow (Change here!)
                  newMat.emissiveIntensity = 0.8;
                }

                // 🌟 Material Surface Tuning:
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
