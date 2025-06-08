import React from 'react';
import Sparkle from './Sparkle'; // keep this import

const NUM_SPARKLES = 40;

const Sparkles = () => {
  const sparkles = Array.from({ length: NUM_SPARKLES }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random() * 5;
    const duration = 8 + Math.random() * 3;
    return <Sparkle key={i} left={left} delay={delay} duration={duration} />;
  });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'visible',
        zIndex: 9999,
      }}
    >
      {sparkles}
    </div>
  );
};

export default Sparkles;
