// import { Suspense, useState } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// import { workExperiences,calculateSizes } from '../constants'
// import Developer from '../components/Developer.jsx';
// import CanvasLoader from '../components/CanvasLoader.jsx';

// const Experience = () => {

//  const [animationName, setAnimationName] = useState('idle');
//  const { deskScale, cameraZ } = calculateSizes();

//   return (
//     <section className='c-space my-20' id="work">
//     <div className='w-full text-white-600'>
//         <h3 className='head-text'>
//             My Work Experience
//         </h3>
//         <div className='work-container'>
//             <div className='work-canvas'>
//              <Canvas>
//               <ambientLight intensity={7} />
//               <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//               <directionalLight position={[10, 10, 10]} intensity={1} />
//               <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />

//               <Suspense fallback={<CanvasLoader />}>                      
//                 <Developer position-y={-3} scale={3} animationName={animationName} />
//               </Suspense>
//             </Canvas>
//             </div>
//             <div className='work-content'>
//                 <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
//                         {workExperiences.map((item, index) => (
//                         <div
//                         key={index}
//                         onClick={() => setAnimationName(item.animation.toLowerCase())}
//                         onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
//                         onPointerOut={() => setAnimationName('idle')}
//                         className="work-content_container group">
//                         <div className="flex flex-col h-full justify-start items-center py-2">
//                             <div className="work-content_logo">
//                             <img className="w-full h-full" src={item.icon} alt="logo" />
//                             </div>

//                             <div className="work-content_bar" />
//                         </div>

//                         <div className="sm:p-5 px-2.5 py-5">
//                             <p className="font-bold text-white-800">{item.name}</p>
//                             <p className="text-sm mb-5">
//                             {item.pos} -- <span>{item.duration}</span>
//                             </p>
//                             <p className="group-hover:text-white transition-all ease-in-out duration-500 text-xs md:text-base">{item.title}</p>
//                         </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     </div>
//     </section>
//   )
// }

// export default Experience


import { useRef, useEffect, useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import { workExperiences, calculateSizes } from '../constants';
import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/CanvasLoader.jsx';

const Experience = () => {
  const canvasRef = useRef(null);
  const [sizes, setSizes] = useState({ deskScale: 3, cameraZ: 38 });
  const [animationName, setAnimationName] = useState('idle');

  const updateSizes = () => {
    if (canvasRef.current) {
      const rect = canvasRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      setSizes(calculateSizes(width, height));
    }
  };
  console.log("sizes",sizes);

  useEffect(() => {
    updateSizes();
    window.addEventListener('resize', updateSizes);
    return () => window.removeEventListener('resize', updateSizes);
  }, []);

  return (
    <section className='c-space my-20' id="work">
      <div className='w-full text-white-600'>
        <h3 className='head-text'>My Work Experience</h3>
        <div className='work-container'>
          <div className='work-canvas' ref={canvasRef}>
            <Canvas camera={{ position: [0, 0, sizes.cameraZ], fov: 30 }}>
              <ambientLight intensity={7} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <directionalLight position={[10, 10, 10]} intensity={1} />
              <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
              <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-6} scale={sizes.deskScale} animationName={animationName} />
              </Suspense>
            </Canvas>
          </div>
          <div className='work-content'>
            <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
              {workExperiences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                  onPointerOut={() => setAnimationName('idle')}
                  className="work-content_container group"
                >
                  <div className="flex flex-col h-full justify-start items-center py-2">
                    <div className="work-content_logo">
                      <img className="w-full h-full" src={item.icon} alt="logo" />
                    </div>
                    <div className="work-content_bar" />
                  </div>
                  <div className="sm:p-5 px-2.5 py-5">
                    <p className="font-bold text-white-800">{item.name}</p>
                    <p className="text-sm mb-5">
                      {item.pos} -- <span>{item.duration}</span>
                    </p>
                    <p className="group-hover:text-white transition-all ease-in-out duration-500 text-xs md:text-base">
                      {item.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
