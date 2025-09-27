import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { skills } from "../constants";

export default function Skills() {
  const sliderRef = useRef(null);
  const animationRef = useRef(null); // store animation instance
  const [dimensions, setDimensions] = useState({
    radius: 300,
    iconSize: 100,
    carouselSize: 200,
    duration: 5,
  });

 const updateDimensions = () => {
  const width = window.innerWidth;

  if (width < 640) {
    setDimensions({ radius: 200, iconSize: 80, carouselSize: 150, duration: 8 });
  } else if (width < 1024) {
    setDimensions({ radius: 300, iconSize: 120, carouselSize: 250, duration: 10 });
  } else {
    setDimensions({ radius: 500, iconSize: 180, carouselSize: 300, duration: 12 });
  }
};

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    const quantity = skills.length;

    gsap.utils.toArray(".skill-item").forEach((item, i) => {
      const angle = (i * 360) / quantity;
      gsap.set(item, {
        rotateY: angle,
        transformOrigin: "50% 50% 0px",
        transform: `rotateY(${angle}deg) translateZ(${dimensions.radius}px)`,
      });
    });

    // Kill previous animation if exists
    if (animationRef.current) animationRef.current.kill();

    // Start rotation
    animationRef.current = gsap.to(sliderRef.current, {
      rotateY: "+=360",
      duration: dimensions.duration,
      ease: "none",
      repeat: -1,
    });
  }, [dimensions]);

  return (
    <section
      id="skills"
      className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute w-2 h-2 bg-transparent rounded-full z-10"></div>

      <h2 className="absolute top-10 text-4xl font-bold text-white">Skills</h2>

      <div
        ref={sliderRef}
        className="relative preserve-3d"
        style={{
          width: `${dimensions.carouselSize}px`,
          height: `${dimensions.carouselSize}px`,
        }}
      >
        {skills.map((skill, i) => (
          <div
            key={i}
            className="absolute inset-0 skill-item flex items-center justify-center"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              style={{
                width: `${dimensions.iconSize}px`,
                height: `${dimensions.iconSize}px`,
              }}
              className="object-contain drop-shadow-xl"
              title={skill.name}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
