import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Vector3 } from "three";

function HarryPotter({ harryRef }) {
  const { scene } = useGLTF("/models/harry_potter_on_a_Bro_0331074503_texture.glb");
  const velocity = useRef(new Vector3()); // Store movement velocity
  const speed = 2; // Speed of movement

  // Handle key presses for movement
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!harryRef.current) return;
      
      switch (e.key) {
        case "w": // Move forward
          velocity.current.z = speed; // Changed from -speed to speed
          break;
        case "s": // Move backward
          velocity.current.z = -speed; // Changed from speed to -speed
          break;
        case "a": // Move left
          velocity.current.x = speed; // Changed from -speed to speed
          break;
        case "d": // Move right
          velocity.current.x = -speed; // Changed from speed to -speed
          break;
        case " ": // Move up (Jump)
          velocity.current.y = speed;
          break;
        case "Shift": // Move down
          velocity.current.y = -speed;
          break;
        default:
          break;
      }
    };
    

    const handleKeyUp = (e) => {
      if (!harryRef.current) return;
      
      switch (e.key) {
        case "w":
        case "s":
          velocity.current.z = 0;
          break;
        case "a":
        case "d":
          velocity.current.x = 0;
          break;
        case " ":
        case "Shift":
          velocity.current.y = 0;
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Update Harry's position on each frame
  useFrame(() => {
    if (harryRef.current) {
      harryRef.current.position.add(velocity.current);
    }
  });

  return <primitive ref={harryRef} object={scene} scale={3} position={[0, 100, -200]} />;
}

export default HarryPotter;
