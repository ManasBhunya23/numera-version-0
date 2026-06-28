import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Core() {
  const coreRef = useRef();
  const glowRef = useRef();

  useFrame((state) => {

    const pulse =
      1 +
      Math.sin(
        state.clock.elapsedTime * 2
      ) * 0.05;

    coreRef.current.scale.setScalar(pulse);

    glowRef.current.scale.setScalar(
      1.3 +
      Math.sin(
        state.clock.elapsedTime * 2
      ) * 0.1
    );

  });

  return (
    <>
      <mesh ref={glowRef}>
        <sphereGeometry args={[1.8, 64, 64]} />

        <meshBasicMaterial
          color="#D4AF37"
          transparent
          opacity={0.12}
        />
      </mesh>

      <mesh ref={coreRef}>
        <sphereGeometry args={[1.3, 64, 64]} />

        <meshBasicMaterial
          color="#F4E5A3"
        />
      </mesh>
    </>
  );
}

function ParticleRing({
  radius,
  tiltX,
  tiltY,
  speed,
  count = 1800
}) {

  const ref = useRef();

  const positions = useMemo(() => {

    const arr =
      new Float32Array(count * 3);

    let ptr = 0;

    for(let i=0;i<count;i++){

      let angle;

      while(true){

        angle =
          Math.random() *
          Math.PI * 2;

        const gap1 =
          angle > 0.7 &&
          angle < 1.6;

        const gap2 =
          angle > 3.8 &&
          angle < 4.5;

        if(!gap1 && !gap2) break;
      }

      const radialNoise =
        (Math.random() - 0.5) * 0.25;

      const thickness =
        (Math.random() - 0.5) * 0.15;

      arr[ptr++] =
        (radius + radialNoise) *
        Math.cos(angle);

      arr[ptr++] =
        thickness;

      arr[ptr++] =
        (radius + radialNoise) *
        Math.sin(angle);

    }

    return arr;

  }, [radius, count]);

  useFrame((state)=>{

    if(!ref.current) return;

    ref.current.rotation.y += speed;

    ref.current.rotation.x =
      tiltX +
      Math.sin(
        state.clock.elapsedTime * 0.4
      ) * 0.15;

    ref.current.rotation.z =
      tiltY +
      Math.cos(
        state.clock.elapsedTime * 0.35
      ) * 0.12;

  });

  return (
    <points ref={ref}>

      <bufferGeometry>

        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />

      </bufferGeometry>

      <pointsMaterial
        color="#D4AF37"
        size={0.045}
      />

    </points>
  );
}

export default function HeroSphere() {

  return (

    <group scale={1.4}>

      <Core />

      <ParticleRing
        radius={4}
        tiltX={0}
        tiltY={0}
        speed={0.001}
      />

      <ParticleRing
        radius={3.8}
        tiltX={Math.PI / 3}
        tiltY={0}
        speed={0.0015}
      />

      <ParticleRing
        radius={3.2}
        tiltX={0}
        tiltY={Math.PI / 4}
        speed={0.002}
      />

    <ParticleRing
        radius={2.8}
        tiltX={0}
        tiltY={Math.PI / 4}
        speed={0.0015}
      />

    </group>

  );
}