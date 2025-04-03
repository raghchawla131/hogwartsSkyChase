import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Terrain() {
  const grassTexture = useTexture("textures/TCom_Ground_ForestMoss01_header.jpg");

  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(500, 500); // Increase tiling for a better look

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -5, 0]} receiveShadow frustumCulled={false}>
      <planeGeometry args={[50000, 50000, 100, 100]} />  {/* Large terrain */}
      <meshStandardMaterial map={grassTexture} />
    </mesh>
  );
}
