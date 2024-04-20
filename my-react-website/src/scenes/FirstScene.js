import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import '../style/Canvas.css'

const FirstScene = () => {
    const boxMesh = useRef();

    useFrame(({clock}) => {
        const time = clock.getElapsedTime();
        boxMesh.current.rotation.x = time;
        boxMesh.current.rotation.y = time;
        // boxMesh.current.rotation.x = 10;

    })
    
    return (
        <mesh ref={boxMesh}>
            {/* args : width, length and depth */}
            <boxGeometry args={[1.5, 1.5, 1.5]} />
            <meshPhysicalMaterial color="lightblue" />
        </mesh>
    )
};

const FirstCanvas = () => {
    return (
        <Canvas className="boxCanvas">
            <FirstScene />            
            <ambientLight intensity={0.1} />
            <directionalLight position={[0, 0, 5]} />
        </Canvas>
    )

}

export default FirstCanvas;