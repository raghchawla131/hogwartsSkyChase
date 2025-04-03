import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import { OrbitControls } from "@react-three/drei";
import QuidditchPitch from "./components/QuidditchPitch.jsx";
import Terrain from "./components/Terrain.jsx";
import HarryPotter from "./components/HarryPotter.jsx";

function CameraSetup() {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 200, 200); // Move camera
    camera.rotation.x = Math.PI; // Rotate 180 degrees
    camera.lookAt(0, 0, 0); // Ensure it points at the scene center
  }, [camera]);

  return null;
}

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ fov: 50 }}>
        <CameraSetup /> {/* Apply custom camera settings */}
        
        {/* Fog for depth */}
        {/* <fog attach="fog" args={["#b2d8b2", 500, 700]} /> */}

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1} />

        {/* Terrain and Quidditch Pitch */}
        <Terrain />
        <QuidditchPitch />

        {/* Add Harry to the scene */}
        <HarryPotter />

        {/* Camera Controls */}
        <OrbitControls maxPolarAngle={Math.PI / 2} />

      </Canvas>
    </div>
  );
}

export default App;