import * as THREE from "three";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // Soft, balanced ambient lighting (cool neutral white)
  const ambientLight = new THREE.AmbientLight(0xdff4ff, 0.45);
  scene.add(ambientLight);

  // Subtle hemisphere lighting: Electric Cyan sky / Deep Navy ground (No pink/purple)
  const hemiLight = new THREE.HemisphereLight(0x00e5ff, 0x061325, 0.5);
  scene.add(hemiLight);

  // Key directional light (soft natural white)
  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.75);
  directionalLight.position.set(0, 6, 8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // Subtle electric cyan rim backlight
  const rimLight = new THREE.DirectionalLight(0x00e5ff, 0.4);
  rimLight.position.set(-3, 2, -4);
  scene.add(rimLight);

  // Subtle laptop/screen fill light
  const pointLight = new THREE.PointLight(0x00e5ff, 0.5, 30, 2);
  pointLight.position.set(3, 12, 4);
  pointLight.castShadow = true;
  scene.add(pointLight);

  function setPointLight(screenLight: THREE.Object3D | null) {
    if (screenLight && (screenLight as THREE.Mesh).material) {
      const mat = (screenLight as THREE.Mesh).material as THREE.MeshStandardMaterial;
      if (mat.opacity > 0.9) {
        pointLight.intensity = mat.emissiveIntensity * 10;
      } else {
        pointLight.intensity = 0.5;
      }
    } else {
      pointLight.intensity = 0.5;
    }
  }

  const duration = 2;
  const ease = "power2.inOut";
  function turnOnLights() {
    gsap.to(directionalLight, {
      intensity: 0.85,
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
