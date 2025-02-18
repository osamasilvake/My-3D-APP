import { useGLTF, useTexture } from "@react-three/drei";
import { Mesh, Object3D } from "three";

const iphoneCase = new URL("/iPhone16.glb", import.meta.url).href;

function PhoneCase({ textureURL }: { textureURL: string }) {
  const { scene } = useGLTF(iphoneCase);

  const texture = useTexture(textureURL);
  texture.flipY = false;

  scene.traverse((child: Object3D) => {
    if (child instanceof Mesh) {
      console.log(child.name);

      if (child.name === "Mesh001") {
        // Apply to back only
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
