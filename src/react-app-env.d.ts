/// <reference types="react-scripts" />

// Three.js JSX extensions
declare global {
  namespace JSX {
    interface IntrinsicElements {
      group: any;
      mesh: any;
      fog: any;
      ambientLight: any;
      pointLight: any;
      spotLight: any;
    }
  }
}
