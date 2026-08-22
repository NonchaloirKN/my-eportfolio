import * as THREE from "three";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // =========================================================================
  // 💡 3D SCENE LIGHTING CUSTOMISATION PLAYGROUND
  // =========================================================================
  // You can adjust intensities, positions, and hex colours below:
  //
  // 1. AMBIENT FILL LIGHT:
  //    - Soft baseline illumination for shadows across the entire model.
  //    - `0x0f172a` (Deep Slate) provides a cinematic mood without washing out dark tones.
  const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
  scene.add(ambientLight);

  // 2. HEMISPHERE SKY/GROUND LIGHT:
  //    - Sky color (top): 0x00e5ff (Electric Cyan)
  //    - Ground color (bottom): 0x061325 (Deep Navy)
  const hemiLight = new THREE.HemisphereLight(0x00e5ff, 0x061325, 0.6);
  scene.add(hemiLight);

  // 3. KEY DIRECTIONAL LIGHT:
  //    - Main crisp white key light from front-top-right casting shadows onto the avatar.
  //    - Adjust `intensity` (e.g. 2.0 to 3.5) and `position.set(x, y, z)`.
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
  directionalLight.position.set(0, 6, 8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // 4. BACK RIM POINT LIGHT (Halo Edge Effect):
  //    - Located behind the avatar (`0, 2, -3`) with Electric Cyan (`0x00e5ff`).
  //    - Creates an edge highlight that silhouettes the character against the dark background.
  const backRimPointLight = new THREE.PointLight(0x00e5ff, 4.0, 15, 1.8);
  backRimPointLight.position.set(0, 2, -3);
  scene.add(backRimPointLight);

  // 5. DIRECTIONAL BACKLIGHT:
  //    - Left-angled rim backlight to sculpt the shoulder and head geometry.
  const rimLight = new THREE.DirectionalLight(0x00e5ff, 0.8);
  rimLight.position.set(-3, 2, -4);
  scene.add(rimLight);

  // 6. LAPTOP / SCREEN EMISSION FILL LIGHT:
  //    - Simulates the interactive laptop screen projecting light up at the avatar.
  const pointLight = new THREE.PointLight(0x00e5ff, 0.8, 30, 2);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  function setPointLight(screenLight: THREE.Object3D | null) {
    if (screenLight && (screenLight as THREE.Mesh).material) {
      const mat = (screenLight as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (mat.opacity > 0.9) {
        pointLight.intensity = mat.emissiveIntensity * 10;
      } else {
        pointLight.intensity = 0.8;
      }
    } else {
      pointLight.intensity = 0.8;
    }
  }

  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(directionalLight, {
      intensity: 2.5,
      duration: duration,
      ease: ease,
    });
    gsap.to(backRimPointLight, {
      intensity: 4.0,
      duration: duration,
      ease: ease,
    });
    gsap.to(".character-rim", {
      y: "55%",
      opacity: 1,
      delay: 0.2,
      duration: 2,
    });
  }

  return { setPointLight, turnOnLights };
};

export default setLighting;
