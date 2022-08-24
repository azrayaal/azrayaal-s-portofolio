import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const particlesInit = async (main) => {
  console.log(main);

  await loadFull(main);
};

const particlesLoaded = (container) => {
  console.log(container);
};

export default function Particlebackground() {
  return (
    // <div className="bg">
    // <Particles
    //   id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
    //   className=""
    //   options={{
    //     fullScreen: {
    //       enable: true,
    //       zIndex: -1,
    //     },
    //     background: {
    //       color: {
    //         value: '',
    //       },
    //     },
    //     fpsLimit: 120,
    //     interactivity: {
    //       events: {
    //         onClick: {
    //           enable: false,
    //           mode: 'push',
    //         },
    //         onHover: {
    //           enable: false,
    //           mode: 'repulse',
    //         },
    //         resize: true,
    //       },
    //       modes: {
    //         push: {
    //           quantity: 4,
    //         },
    //         repulse: {
    //           distance: 200,
    //           duration: 0.4,
    //         },
    //       },
    //     },
    //     particles: {
    //       color: {
    //         value: '#ffffff',
    //       },
    //       links: {
    //         color: '#ffffff',
    //         distance: 150,
    //         enable: true,
    //         opacity: 0.5,
    //         width: 1,
    //       },
    //       collisions: {
    //         enable: true,
    //       },
    //       move: {
    //         directions: 'none',
    //         enable: true,
    //         outModes: {
    //           default: 'bounce',
    //         },
    //         random: false,
    //         speed: 1,
    //         straight: false,
    //       },
    //       number: {
    //         density: {
    //           enable: true,
    //           area: 800,
    //         },
    //         value: 80,
    //       },
    //       opacity: {
    //         value: 0.5,
    //       },
    //       shape: {
    //         type: 'circle',
    //       },
    //       size: {
    //         value: { min: 1, max: 5 },
    //       },
    //     },

    //     detectRetina: true,
    //   }}
    // />
    // </div>
    <div>
      <Particles
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
    </div>
  );
}
