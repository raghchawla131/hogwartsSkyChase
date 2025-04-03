import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import QuidditchPitch from "./components/QuidditchPitch.jsx";
import Terrain from "./components/Terrain.jsx";
import HarryPotter from "./components/HarryPotter.jsx";
import FollowHarry from "./components/FollowHarry.jsx";

function App() {
  const harryRef = useRef(); // Reference to Harry
  const [isUserRotating, setIsUserRotating] = useState(false); // Track if user is rotating

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas camera={{ fov: 50 }}>
        {/* Camera follows Harry unless user is rotating */}
        <FollowHarry targetRef={harryRef} isUserRotating={isUserRotating} />

        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 20, 10]} intensity={1} />

        {/* Terrain and Quidditch Pitch */}
        <Terrain />
        <QuidditchPitch />

        {/* Harry Potter model */}
        <HarryPotter harryRef={harryRef} />

        {/* OrbitControls to allow rotation
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          onStart={() => setIsUserRotating(true)} // Detect when user starts rotating
          onEnd={() => setTimeout(() => setIsUserRotating(false), 2000)} // Resume auto-follow after 2s
        /> */}
      </Canvas>
    </div>
  );
}

export default App;
