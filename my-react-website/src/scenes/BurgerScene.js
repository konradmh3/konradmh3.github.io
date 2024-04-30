import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import '../style/Canvas.css'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { useLoader } from '@react-three/fiber'
import { Clone } from '@react-three/drei'

const BurgerScene = () => {
    const burgerFBX = useLoader(FBXLoader, '/assets/burger.fbx') //load the burger object
    const burgerMesh = useRef();

    useFrame(({clock}) => {
        const time = clock.getElapsedTime();
        burgerMesh.current.rotation.y = time;
    })

    return <Clone object={burgerFBX} scale={[0.01, 0.01, 0.01]} ref={burgerMesh}/>
    
};

const BurgerCanvas = () => { 
    return (
        <Canvas>
            <BurgerScene />
            <ambientLight intensity={1} />
            <directionalLight position={[0, 5, 5]} />
        </Canvas>
    )

}

export default BurgerCanvas;



// if you want to duplicate, just like in vanilla you have to clone, or use gltfjsx 4. drei has a nice helper for cloning btw, it supports things that plain three object.clone() wouldn’t support like skinned meshes and has some shortcuts (for settings shadows and injecting materials).

// import { Clone } from '@react-three/drei'

// function Car(props){
//   const material = useLoader(MTLLoader, require('./OBJAssests/car.mtl'))
//   const obj = useLoader(
//     OBJLoader, 
//     require('./OBJAssests/car.obj'),
//     (loader) => {
//       material.preload();
//       loader.setMaterials(material)
//     }
//   )
//   return <Clone object={obj} {...props}>
// }
// ofc you can also do what @makc3d said, though i’d prefer drei/clone for the reasons above

//   const clone = useMemo(() => obj.clone(), [obj])
//   return <primitive object={clone} {...props}>
// ps, you’re dumping a scene into a THREE.Mesh above. that wouldn’t make sense.