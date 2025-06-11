import Globe from "react-globe.gl"
import Button from "../components/Button"
import { useState } from "react"

const About = () => {
    const [hasCopied,setHasCopied]=useState(false);

    const handleCopy=()=>{
        navigator.clipboard.writeText('yshashank024@gmail.com');
        setHasCopied(true);

        setTimeout(()=>{setHasCopied(false);},2000);
    }

  return (
    <section className='c-space my-20' id="about">

    <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>

      <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
            <img src='/assets/grid1.png' alt='grid-1' className='w-full sm:h-[276px] h-fit object-contain'/>
            <div>
                <p className='grid-headtext'>Hi, I'm Shashank</p>
                <p className='grid-subtext'> I’m a passionate Fullstack Developer who creates scalable, responsive applications using modern technologies 
                  like React, Node.js, and Next.js.</p>
            </div>
        </div>
      </div>

     <div className='col-span-1 xl:row-span-3'>
        <div className='grid-container'>
            <img src='/assets/grid2.png' alt='grid-2' className='w-full sm:h-[276px] h-fit object-contain'/>
            <div>
                <p className='grid-headtext'>Tech Stack</p>
                <p className='grid-subtext'> I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications </p>
            </div>
        </div>
      </div>

       <div className='col-span-1 xl:row-span-4'>
        <div className='grid-container'>
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 12.9716, lng: 77.5946, text: 'Bengaluru, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
            <p className="grid-headtext">
                 I thrive in both remote and in-person environments, ensuring smooth collaboration across time zones.
                </p>
                <p className="grid-subtext">
                Based in Bengaluru, India, I’m open to both remote and on-site opportunities worldwide.
                </p>
                <a href="/assets/ShashankYadavResume.pdf" download>
                <Button name="My Resume" isBeam containerClass="w-full mt-10"></Button></a>
            </div>
        </div>
      </div>


    <div className='xl:col-span-2 xl:row-span-3'>
        <div className='grid-container'>
            <img src='/assets/grid3.png' alt='grid-3' className='w-full sm:h-[266px] h-fit object-contain'/>
            <div>
            <p className="grid-headtext">Driven by Curiosity and Code</p>
            <p className="grid-subtext">
            I’ve been passionate about coding since high school—solving problems and building real-world applications keep me energized. 
            I love learning new technologies and constantly pushing my boundaries as a developer.
            </p>
            </div>
        </div>
      </div>

      <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container">
            <img src="/assets/grid4.png" alt="grid-4" className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"></img>

            <div className="space-y-2">
                <p className="grid-subtext text-center">Contact Me</p>
                <div className="copy-container" onClick={handleCopy}>
                    <img src={hasCopied ? 'assets/tick.svg': 'assets/copy.svg'} alt="copy"/>
                    <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">yshashank024@gmail.com</p>
                </div>

            </div>

        </div>

      </div>

    </div>
    </section>
  )
}

export default About
