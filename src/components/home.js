import React, { Component } from "react";
import Particles from "react-tsparticles";
import { Button, Container } from "semantic-ui-react";
import ScrollAnimation from "react-animate-on-scroll";
import Nav from "./nav"


export default class Home extends Component {
  render() {
    return (
        <div>
      <div className="home">
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "#000000",
              },
              image: "",
              position: "50% 50%",
              repeat: "no-repeat",
              size: "cover",
              opacity: 0.7,
            },
            backgroundMask: {
              cover: {
                color: {
                  value: "#fff",
                },
                opacity: 1,
              },
              enable: false,
            },
            detectRetina: true,
            fpsLimit: 60,
            infection: {
              cure: false,
              delay: 0,
              enable: false,
              infections: 0,
              stages: [],
            },
            interactivity: {
              detectsOn: "canvas",
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onDiv: {
                  ids: [],
                  enable: false,
                  mode: [],
                  type: "circle",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                attract: {
                  distance: 200,
                  duration: 0.4,
                  speed: 1,
                },
                bubble: {
                  distance: 400,
                  duration: 2,
                  opacity: 0.8,
                  size: 80,
                },
                connect: {
                  distance: 80,
                  links: {
                    opacity: 0.5,
                  },
                  radius: 100,
                },
                grab: {
                  distance: 400,
                  links: {
                    opacity: 1,
                  },
                },
                push: {
                  quantity: 4,
                },
                remove: {
                  quantity: 2,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                  speed: 1,
                },
                slow: {
                  factor: 3,
                  radius: 200,
                },
                trail: {
                  delay: 1,
                  quantity: 1,
                },
              },
            },
            particles: {
              collisions: {
                enable: false,
                mode: "bounce",
              },
              color: {
                value: "#ff0000",
                animation: {
                  enable: true,
                  speed: 20,
                  sync: true,
                },
              },
              links: {
                blink: false,
                color: {
                  value: "#04c2c9",
                },
                consent: false,
                distance: 100,
                enable: true,
                opacity: 0.4,
                shadow: {
                  blur: 5,
                  color: {
                    value: "#00ff00",
                  },
                  enable: false,
                },
                triangles: {
                  enable: false,
                },
                width: 1,
                warp: false,
              },
              move: {
                angle: 90,
                attract: {
                  enable: false,
                  rotate: {
                    x: 600,
                    y: 1200,
                  },
                },
                direction: "none",
                enable: true,
                noise: {
                  delay: {
                    random: {
                      enable: false,
                      minimumValue: 0,
                    },
                    value: 0,
                  },
                  enable: false,
                },
                outMode: "out",
                random: false,
                speed: 3,
                straight: false,
                trail: {
                  enable: false,
                  length: 10,
                  fillColor: {
                    value: "#000000",
                  },
                },
                vibrate: false,
                warp: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 700,
                  factor: 1000,
                },
                limit: 150,
                value: 80,
              },
              opacity: {
                animation: {
                  enable: false,
                  minimumValue: 0.1,
                  speed: 3,
                  sync: false,
                },
                random: {
                  enable: false,
                  minimumValue: 1,
                },
                value: 0.5,
              },
              rotate: {
                animation: {
                  enable: false,
                  speed: 0,
                  sync: false,
                },
                direction: "clockwise",
                path: false,
                random: false,
                value: 0,
              },
              shadow: {
                blur: 0,
                color: {
                  value: "#000000",
                },
                enable: false,
                offset: {
                  x: 0,
                  y: 0,
                },
              },
              shape: {
                options: {
                  polygon: {
                    nb_sides: 5,
                  },
                  star: {
                    nb_sides: 5,
                  },
                  image: {
                    src:
                      "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100,
                  },
                  images: {
                    src:
                      "https://cdn.matteobruni.it/images/particles/github.svg",
                    width: 100,
                    height: 100,
                  },
                },
                type: "circle",
              },
              size: {
                animation: {
                  destroy: "none",
                  enable: false,
                  minimumValue: 0.1,
                  speed: 20,
                  startValue: "max",
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 1,
                },
                value: 3,
              },
              stroke: {
                width: 0,
              },
              twinkle: {
                lines: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
                particles: {
                  enable: false,
                  frequency: 0.05,
                  opacity: 1,
                },
              },
            },
            pauseOnBlur: true,
          }}
        />
        <Container text id="home-title" textAlign="center">
        <ScrollAnimation animateIn="fadeInUp" delay={1000}>
          <div className="text">
            <p>Hello, I'm <span className="highlight">Sam Kyprianou</span>.{" "}
            <br></br>I'm a full-stack web developer. </p>
          <Button inverted color='teal'>
        My Work
      </Button>
          </div>
      </ScrollAnimation>
      </Container>
      </div>
      <Nav />
      </div>
    );
  }
}
