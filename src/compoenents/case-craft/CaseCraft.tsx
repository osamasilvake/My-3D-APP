import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import PhoneCase from "../PhoneCase.tsx";
import textureImage from "../../assets/images/osama.jpeg";
import "../case-craft/CaseCraft.css";

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
    <div className="case-craft-container">
      <input
        type="file"
        onChange={handleTextureUpload}
        accept="image/*"
        className="texture-upload"
      />

      <Canvas camera={{ position: [0, 0, 160] }}>
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
