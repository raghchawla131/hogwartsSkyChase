import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

function FollowHarry({ targetRef }) {
  const cameraOffset = new Vector3(0, 10, -30); // Camera behind and above
  const smoothFactor = 0.08; // Smooth transition speed
  const tempVec = new Vector3(); // Temporary vector to store target position
  const initialized = useRef(false); // Track if camera is placed initially

  useFrame(({ camera }) => {
    if (targetRef.current) {
      const targetPosition = targetRef.current.position;

      // Compute the desired camera position behind Harry
      tempVec.copy(targetPosition).add(cameraOffset);

      if (!initialized.current) {
        // Start camera farther behind and smoothly move it in
        camera.position.copy(tempVec.clone().add(new Vector3(0, 70, -100))); // Move it further back initially
        camera.lookAt(targetPosition);
        initialized.current = true;
      }

      // Smoothly interpolate between current and target position
      camera.position.lerp(tempVec, smoothFactor);
      camera.lookAt(targetPosition);
    }
  });

  return null;
}

export default FollowHarry;
