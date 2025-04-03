import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function FollowHarry({ targetRef }) {
  const cameraRef = useRef();

  useFrame(({ camera }) => {
    if (targetRef.current) {
      const targetPosition = targetRef.current.position;
      
      // Set camera position behind and above Harry Potter
      camera.position.set(
        targetPosition.x - 50, // Move back
        targetPosition.y + 30, // Move up
        targetPosition.z
      );

      // Make camera look at Harry Potter
      camera.lookAt(targetPosition);
    }
  });

  return null;
}

export default FollowHarry;