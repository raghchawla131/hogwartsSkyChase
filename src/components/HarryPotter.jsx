import { useGLTF } from "@react-three/drei";

function HarryPotter({ harryRef }) {
  const { scene } = useGLTF("/models/harry_potter_on_a_Bro_0331074503_texture.glb")

  return <primitive ref={harryRef}  object={scene} scale={3} position={[0, 100, 0]} />;
}

export default HarryPotter;
