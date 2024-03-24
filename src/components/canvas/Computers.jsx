import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";


const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh>
      <Hemispherelight intensity={0.15} groundColor='black' />
      <Pointlight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  );
};

const ComputersCanvas = () => {
  <Canvas
    frameloop="demand"
    shadows
    camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }}
  >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Computers/>
    </Suspense>

    <Preload all />
  </Canvas>;
};

export default Computers;
