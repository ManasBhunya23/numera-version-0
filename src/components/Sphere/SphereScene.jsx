import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import HeroSphere from "./HeroSphere";

export default function SphereScene() {

  const isMobile =
    window.innerWidth <= 768;

  return (

    <Canvas

      style={{
        width:"100%",
        height:"100%"
      }}

      camera={{
        position:
          isMobile
            ? [0,0,11]
            : [0,0,8],

        fov:
          isMobile
            ? 58
            : 50
      }}

    >

      <ambientLight intensity={1.2} />

      <HeroSphere />

      <OrbitControls

        enableZoom={false}

        enablePan={false}

        autoRotate

        autoRotateSpeed={
          isMobile
            ? 0.12
            : 0.2
        }

      />

    </Canvas>

  );

}