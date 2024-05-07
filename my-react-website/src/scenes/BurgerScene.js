import { Canvas, useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import "../style/Canvas.css";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { useLoader } from "@react-three/fiber";
import { Clone, OrbitControls } from "@react-three/drei";
import { BackSide, DoubleSide, Group } from "three";
import { Visible } from "react-grid-system";

const BurgerScene = () => {
  const burgerFBX = useLoader(FBXLoader, "/assets/burger.fbx"); //load the burger object
  const burgerMesh = useRef();
  // lets add a plane mesh to the scene so we can cast a shadow

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    burgerMesh.current.rotation.y = time;
    burgerMesh.current.scale.x = 0.0001 * Math.sin(10 * time) + 0.012;
    burgerMesh.current.scale.y = 0.0001 * Math.sin(10 * time) + 0.012;
    burgerMesh.current.scale.z = 0.0001 * Math.sin(10 * time) + 0.012;
    // ^ for the above, decreasing the first number decreases amplitude or the amount it fluctuates, increasing the second number increases the speed of the fluctuation,
    // increasing the third number increases the overall size of the object

    // console.log(burgerMesh.current.scale.x);
  });
  return (
    <group>
      <Clone object={burgerFBX} scale={[0.012, 0.012, 0.012]} position={[0, -1, 1.7]} ref={burgerMesh} receiveShadow castShadow/>
      
      {/* 
    Leets add a plane mesh to the scene so we can cast a shadow
    */}
      <mesh
        receiveShadow
        scale={[100, 100, 5]}
        rotation={[-Math.PI / 1, 0, 0]}
        position={[0, -0.5, 0]}
      >
        <planeGeometry />
        <meshStandardMaterial
          attach="material"
          color="#E2B080"
          side={DoubleSide}
        />
      </mesh>
    </group>
  );
  //use     ^   primitive if you arent planning on repeating the object in the scene or page
};

const BurgerCanvas = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6] }} shadows>
      <BurgerScene />
      <ambientLight intensity={.5} />
      <directionalLight castShadow intensity={4} position={[-1.6, .8, 2]} />
      
    </Canvas>
  );
};

export default BurgerCanvas;
