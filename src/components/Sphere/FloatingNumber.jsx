import { Text, Billboard } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useMemo } from "react";

export default function FloatingNumber({
  value,
  position,
  size = 0.35,
  color = "#D4AF37"
}) {

  const ref = useRef();

  const velocity = useMemo(() => ({
    x: (Math.random() - 0.5) * 0.003,
    y: (Math.random() - 0.5) * 0.003,
    z: (Math.random() - 0.5) * 0.003
  }), []);

  useFrame(() => {

    if (!ref.current) return;

    ref.current.position.x += velocity.x;
    ref.current.position.y += velocity.y;
    ref.current.position.z += velocity.z;

    if (Math.abs(ref.current.position.x) > 5)
      velocity.x *= -1;

    if (Math.abs(ref.current.position.y) > 5)
      velocity.y *= -1;

    if (Math.abs(ref.current.position.z) > 5)
      velocity.z *= -1;

  });

  return (
    <Billboard>

      <Text
        ref={ref}
        position={position}
        fontSize={size}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {value}
      </Text>

    </Billboard>
  );
}