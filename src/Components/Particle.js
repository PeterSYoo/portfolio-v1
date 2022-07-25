import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const Particle = () => {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        detectRetina: false,
        fpsLimit: 30,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            resize: true,
          },
        },
        particles: {
          color: {
            value: '#fff',
          },
          number: {
            density: {
              enable: true,
              area: 1080,
            },
            limit: 0,
            value: 400,
          },
          opacity: {
            animation: {
              enable: true,
              minimumValue: 0.05,
              speed: 3.25,
              sync: false,
            },
            random: {
              enable: true,
              minimumValue: 0.05,
            },
            value: 1,
          },
          shape: {
            type: 'circle',
          },
          size: {
            random: {
              enable: true,
              minimumValue: 0.5,
            },
            value: 1,
          },
        },
      }}
    />
  );
};

export default Particle;
