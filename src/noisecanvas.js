import React, { useEffect, useRef } from 'react';
//creates the tv static effect. I have **NO** idea how this works i just yoinked it.
const NoiseCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const noise = () => {
      let canvas = canvasRef.current;
      let ctx = canvas.getContext('2d');
      let wWidth = window.innerWidth;
      let wHeight = window.innerHeight;
      let noiseData = [];
      let frame = 0;
      let loopTimeout;

      const createNoise = () => {
        const idata = ctx.createImageData(wWidth, wHeight);
        const buffer32 = new Uint32Array(idata.data.buffer);
        const len = buffer32.length;

        for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
            buffer32[i] = 0xff000000;
          }
        }

        noiseData.push(idata);
      };

      const paintNoise = () => {
        if (frame === 9) {
          frame = 0;
        } else {
          frame++;
        }
        ctx.putImageData(noiseData[frame], 0, 0);
      };

      const loop = () => {
        paintNoise();
        loopTimeout = setTimeout(() => {
          requestAnimationFrame(loop);
        }, 1000 / 25);
      };

      const setup = () => {
        canvas.width = wWidth;
        canvas.height = wHeight;
        for (let i = 0; i < 10; i++) {
          createNoise();
        }
        loop();
      };

      setup();

      return () => {
        clearTimeout(loopTimeout);
      };
    };

    noise();
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex:1000, pointerEvents: 'none', opacity: '.06' }} />;
};

export default NoiseCanvas;