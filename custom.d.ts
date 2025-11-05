// Needed to load local images in typescript
declare module "*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const content: string;
  export default content;
}

// GLTF type declarations
declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.gltf' {
  const src: string;
  export default src;
}

// Three.js JSX element declarations for @react-three/fiber
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      geometry: any;
      material: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
      fog: any;
      primitive: any;
      bufferGeometry: any;
      meshStandardMaterial: any;
      meshBasicMaterial: any;
      directionalLight: any;
      hemisphereLight: any;
      perspectiveCamera: any;
      orthographicCamera: any;
      scene: any;
      object3D: any;
    }
  }
}