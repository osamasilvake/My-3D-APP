import { useGLTF, useTexture } from "@react-three/drei";
import { Mesh, Object3D } from "three";

const iphoneCase = new URL("/iPhone16.glb", import.meta.url).href;

function PhoneCase({ textureURL }: { textureURL: string }) {
  const { scene } = useGLTF(iphoneCase);
  const texture = useTexture(textureURL);

  scene.traverse((child: Object3D) => {
    if (child instanceof Mesh) {
      if (child.name === "Mesh001" || child.name === "Mesh001_1") {
        if (child.material && "map" in child.material) {
          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      }
    }
  });

  return <primitive object={scene} />;
}

export default PhoneCase;
