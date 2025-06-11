import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { useRef, useEffect, Suspense,useState } from 'react'
import HackerRoom from '../components/Hackerroom.jsx'
import {Leva, useControls} from 'leva';
import { OrbitControls } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';
import CanvasLoader from '../components/CanvasLoader.jsx';
import { AnimatePresence, motion } from "framer-motion";
import Sparkles from '../components/SparklesContainer';
import Button from '../components/Button';

 export const calculateSizes=(isSmall, isMobile, isTablet)=>{
    return {
      deskScale:isSmall ? 0.15 : isMobile ? 0.2: 0.26,
    }
  }


const Hero = () => {


  const isSmall= useMediaQuery({maxWidth:480});
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px,max-width: 1024px)' }); 
  const sizes=calculateSizes(isSmall, isMobile, isTablet);

  const controlsRef = useRef()
  const objectPosition = [-10, 0, 20]

  const phrases = ['Ideas', 'Concepts', 'Designs'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const animationVariants = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 },
  }


  
  // const controls=useControls( 'HackerRoom', {
  //   positionX: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   positionY: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   positionZ: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   rotationX: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   rotationY: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   rotationZ: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   scaleX: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   scaleY: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   },
  //   scaleZ: {
  //     value: 2.5,
  //     min:-10,
  //     max:10,
  //   }
    
  // })

  return (
    <section className='min-h-screen w-full flex flex-col relative' id="home">
      <Sparkles/>
      <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
        <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'> Hi, I am Shashank 
          <span className='waving-hand'> 🖐</span> </p>
    
            <h1 className="hero_tag text-gray_gradient text-3xl md:text-5xl font-bold leading-snug text-center flex justify-center items-center gap-2 flex-wrap">
            Transforming&nbsp;
            <span className="relative inline-block overflow-visible text-red-700">
              <AnimatePresence mode="wait">
                <motion.span
                  key={phrases[index]}
                  variants={animationVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="inline-block"
                >
                  {phrases[index]}
                </motion.span>
              </AnimatePresence>
            </span>
            &nbsp;into Scalable Code
          </h1>

      </div>
      <div className='w-full h-full absolute inset-0 top-1 md:top-3 lg:top-6'>
            <Leva hidden/>s
        <Canvas className='w-full h-full'>
          <Suspense fallback={<CanvasLoader></CanvasLoader>}>
            <PerspectiveCamera makeDefault position={[-10, 1, 46]}/>
         
            <OrbitControls
              ref={controlsRef}
              target={objectPosition}
              minDistance={20}
              maxDistance={50}
              minPolarAngle={Math.PI / 4}   // limit how far down you can rotate
              maxPolarAngle={Math.PI / 2}   // limit how far up you can rotate
            />

            <HackerRoom
              //  scale={isMobile ? 0.1 : 0.2}
               scale={sizes.deskScale}
               position={[-10, -4, 20]} 
               rotation={[0.1, 0.05, 0]} 

              // position={[controls.positionX,controls.positionY,controls.positionZ]}
              // rotation={[controls.rotationX,controls.rotationY,controls.rotationZ]}
              // scale={[controls.scaleX,controls.scaleY,controls.scaleZ]}

             />
            <ambientLight intensity={1}/>
            <directionalLight position={[10,10,10]} intensity={1} />
            </Suspense>
        </Canvas>
      </div>

      <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
        <a href="#about">
          {/* Enter My Digital World */}
          {/* Explore My 3D Portfolio */}
          {/* Unveil the 3D Experience */}
          {/* Step In 3D Digital World */}
          <Button name="Enter My Digital World " isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
        </a>
      </div>
    </section>
  )
}

export default Hero
