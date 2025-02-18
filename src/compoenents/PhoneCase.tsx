import { useGLTF, useTexture } from "@react-three/drei";

import iphoneCase from "../assets/iPhone16.glb";
import { Texture } from "three";

function PhoneCase({ textureURL }: { textureURL: string }) {
  const { scene } = useGLTF(iphoneCase);
  const texture = useTexture(textureURL);

  scene.traverse(
    (child: {
      isMesh: any;
      name: string;
      material: { map: Texture; needsUpdate: boolean };
    }) => {
      console.log(child);
      if (
        child.isMesh &&
        (child.name === "Mesh001" || child.name === "Mesh001_1")
      ) {
        child.material.map = texture;
        child.material.needsUpdate = true;
      }
    }
  );
  return <primitive object={scene} />;
}

export default PhoneCase;
