import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useState } from "react";

import PhoneCase from "./PhoneCase.tsx";
import textureImage from "../assets/texture.jpg";

function CaseCraft() {
  const [customTexture, setCustomTexture] = useState(textureImage);

  const handleTextureUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setCustomTexture(url);
    }
  };

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <input
        type="file"
        onChange={handleTextureUpload}
        accept="image/*"
        style={{ position: "absolute", zIndex: 1, top: 10, left: 10 }}
      />

      <Canvas camera={{ position: [0, 0, 190] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={1} />

        <Suspense fallback={null}>
          <PhoneCase textureURL={customTexture} />
        </Suspense>

        <OrbitControls enableZoom enableRotate enablePan />
      </Canvas>
    </div>
  );
}

export default CaseCraft;
