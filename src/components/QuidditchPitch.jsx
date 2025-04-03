import { useGLTF } from "@react-three/drei";

function QuidditchPitch() {
  const { scene } = useGLTF("/models/hogwarts_quidditch_pi_0331080338_texture.glb")

  // return <primitive object={scene} scale={300} position={[0, 70, 0]} rotation={[-Math.PI / 20, 0, 0]} />;
  return <primitive object={scene} scale={300} position={[0, 100, 0]} />;
}

export default QuidditchPitch;