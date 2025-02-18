import { Object3D } from "three";
import { Object3DNode } from "@react-three/fiber";
import { ThreeElements } from "@react-three/fiber";

declare module "*.glb" {
  const value: string;
  export default value;
}

declare module "@react-three/fiber" {
  interface ThreeElements {
    primitive: Object3DNode<Object3D, typeof Object3D>;
  }
}

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {}
    }
  }
}
