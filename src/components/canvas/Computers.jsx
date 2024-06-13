import { Suspense, useEffect, useState, useRef  } from 'react';
import { Canvas } from '@react-three/fiber';
import { SpotLightHelper } from 'three';
import { OrbitControls, PositionPoint, Preload, useGLTF, useHelper } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Computers = (isMobile) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  //uncomment for helper lights:
    // const spotLightRef = useRef();
    // useHelper(spotLightRef, SpotLightHelper, 'cyan');
    // ref to the light -->

    return (
      <mesh>
      <hemisphereLight intensity={0.75} groundColor='black' />
      <spotLight
        // ref={spotLightRef} <-- ref to the light
        position={[10, 7, -4]}
        angle={0.1}
        intensity={100} 
        castShadow 
        shadow-mapSize={1024} 
      />
      <pointLight intensity={7} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.85}
        position={isMobile ? [0, -2.5, -1.5] : [0, -4.25, -1.5]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 500px');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}
export default ComputersCanvas