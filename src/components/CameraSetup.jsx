import { useThree } from "@react-three/fiber";
import { useEffect } from "react";

function CameraSetup({ harryPosition }) {
  const { camera } = useThree();

  useEffect(() => {
    if (harryPosition) {
      // Smoothly follow Harry, adjust y and z as needed
      camera.position.lerp(
        { x: harryPosition.x, y: harryPosition.y + 20, z: harryPosition.z + 50 },
        0.1 // Smooth follow effect
      );
      camera.lookAt(harryPosition.x, harryPosition.y, harryPosition.z); // Always look at Harry
    }
  }, [harryPosition, camera]);

  return null;
}

export default CameraSetup;
