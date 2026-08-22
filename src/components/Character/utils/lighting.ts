import * as THREE from "three";
import { gsap } from "gsap";

const setLighting = (scene: THREE.Scene) => {
  // Ambient fill light: Deep Slate (#0f172a) to bring out shadows beautifully
  const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
  scene.add(ambientLight);

  // Subtle hemisphere lighting: Electric Cyan sky / Deep Navy ground
  const hemiLight = new THREE.HemisphereLight(0x00e5ff, 0x061325, 0.6);
  scene.add(hemiLight);

  // Key directional light: Crisp white (0xffffff), strong cinematic key light
  const directionalLight = new THREE.DirectionalLight(0xffffff, 2.5);
  directionalLight.position.set(0, 6, 8);
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  directionalLight.shadow.camera.near = 0.5;
  directionalLight.shadow.camera.far = 50;
  scene.add(directionalLight);

  // Strong PointLight directly behind the character for vibrant Electric Cyan rim-light / halo effect
  const backRimPointLight = new THREE.PointLight(0x00e5ff, 4.0, 15, 1.8);
  backRimPointLight.position.set(0, 2, -3);
  scene.add(backRimPointLight);

  // Electric cyan rim directional backlight
  const rimLight = new THREE.DirectionalLight(0x00e5ff, 0.8);
  rimLight.position.set(-3, 2, -4);
  scene.add(rimLight);

  // Laptop/screen fill light
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
