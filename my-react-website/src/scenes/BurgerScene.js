import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "../style/Canvas.css";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";
import { Clone } from "@react-three/drei";

const BurgerScene = () => {
  const burgerFBX = useLoader(FBXLoader, "/assets/burger.fbx"); //load the burger object
  const burgerMesh = useRef();

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    burgerMesh.current.rotation.y = time;
    burgerMesh.current.scale.x = 0.0001 * Math.sin(10 * time)+0.008
    burgerMesh.current.scale.y = 0.0001 * Math.sin(10 * time)+0.008
    burgerMesh.current.scale.z = 0.0001 * Math.sin(10 * time)+0.008
        // ^ for the above, decreasing the first number decreases amplitude or the amount it fluctuates, increasing the second number increases the speed of the fluctuation,
        // increasing the third number increases the overall size of the object


    console.log(burgerMesh.current.scale.x);




  });

  return (
    <Clone object={burgerFBX} scale={[0.01, 0.01, 0.01]} ref={burgerMesh} />
  );
  //use     ^   primitive if you arent planning on repeating the object in the scene or page
};

const BurgerCanvas = () => {
  return (
    <Canvas camera={{}}>
      <BurgerScene />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 5, 5]} />
    </Canvas>
  );
};

export default BurgerCanvas;
