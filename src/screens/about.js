import React, { Component } from "react";
import { Grid, Container } from "semantic-ui-react";
import profile from "../images/profile.webp";
import profileJpg from "../images/profile.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";


export default class About extends Component {
  state = { animate: false };

  render() {
    const handleAnimate = () => this.setState({ animate: true });

    const style = {
      css: this.state.animate ? { width: "90%" } : { width: "0%" },
      html: this.state.animate ? { width: "90%" } : { width: "0%" },
      react: this.state.animate ? { width: "80%" } : { width: "0%" },
      jS: this.state.animate ? { width: "80%" } : { width: "0%" },
      nodeJS: this.state.animate ? { width: "65%" } : { width: "0%" },
      rubyRails: this.state.animate ? { width: "70%" } : { width: "0%" },
      uiDesign: this.state.animate ? { width: "60%" } : { width: "0%" },
      photoshop: this.state.animate ? { width: "75%" } : { width: "0%" },
      typeScript: this.state.animate ? { width: "70%" } : { width: "0%" },
      SQL: this.state.animate ? { width: "80%" } : { width: "0%" },
    };

    const ImgWithFallback = ({
      src,
      fallback,
      type = 'image/webp',
      alt,
      ...delegated
    }) => {
      return (
        <picture>
          <source srcSet={src} type={type} />
          <img src={fallback} alt={alt} {...delegated} />
        </picture>
      );
    };

    return (
      <div className="about">
        <Container fluid className="about-container">
          <div className="title">
            <h1>About</h1>
          </div>
          <Grid centered>
            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <div className="hexagon-wrapper">
                <div className="hexagon">
                  <ScrollAnimation
                    className="animated-circle"
                    animateIn="expand"
                    animateOnce={true}
                  >
                    <div className="circle">
                      <FontAwesomeIcon
                        icon={faClock}
                        style={{ color: "#ebeded", fontSize: 90 }}
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="skills marker">Fast</div>
                <p id="skills-blurb">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <div className="hexagon-wrapper">
                <div className="hexagon">
                  <ScrollAnimation
                    animateIn="expand"
                    delay={500}
                    className="animated-circle"
                    animateOnce={true}
                  >
                    <div className="circle">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        style={{ color: "#ebeded", fontSize: 90 }}
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={500}
                animateOnce={true}
              >
                <div className="skills marker">Responsive</div>
                <p id="skills-blurb">
                  My layouts will work on any device, big or small.
                </p>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <div className="hexagon-wrapper">
                <div className="hexagon">
                  <ScrollAnimation
                    animateIn="expand"
                    animateOnce={true}
                    delay={1000}
                    className="animated-circle"
                  >
                    <div className="circle">
                      <FontAwesomeIcon
                        icon={faLightbulb}
                        style={{ color: "#ebeded", fontSize: 90 }}
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={1000}
                animateOnce={true}
              >
                <div className="skills marker">Intuitive</div>
                <p id="skills-blurb">
                  Strong preference for easy to use, intuitive UX/UI.
                </p>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <div className="hexagon-wrapper">
                <div className="hexagon">
                  <ScrollAnimation
                    animateIn="expand"
                    animateOnce={true}
                    delay={1500}
                    className="animated-circle"
                  >
                    <div className="circle">
                      <FontAwesomeIcon
                        icon={faHeartbeat}
                        style={{ color: "#ebeded", fontSize: 90 }}
                      />
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={1500}
                animateOnce={true}
              >
                <div className="skills marker">Dynamic</div>
                <p id="skills-blurb">
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </ScrollAnimation>
            </Grid.Column>
          </Grid>

          <section id="profile">
            <Grid columns={2} centered style={{ padding: "inherit" }}>
              <Grid.Column className="profile-pic" tablet={15} computer={6}>
                <div className="profile-pic-border">
                  <div className="profile-wrappper">
                    <ScrollAnimation
                      animateIn="fadeIn"
                      delay={900}
                      animateOnce={true}
                    >
                      <ImgWithFallback 
                      className="profile"
                      src={profile}
                      fallback={profileJpg}
                      alt="Profile Picture"
                      />
                    </ScrollAnimation>
                  </div>
                </div>
              </Grid.Column>
              <Grid.Column tablet={15} computer={9} textAlign="center">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={500}
                  animateOnce={true}
                  className="animate-profile"
                >
                  <p className="skills who marker">Who's This Guy?</p>

                  <p id="blurb">
                    I'm a recently qualified full stack software engineer living
                    in London, UK. I have previous experience in luxury fashion
                    retail and transitioned to coding to follow my passion and
                    to help companies build intuitive, user-friendly
                    applications and websites. Creative, result-driven, and
                    detail-oriented with strong interpersonal skills. I have
                    serious joy for UI effects, animations and creating dynamic
                    user experiences.
                  </p>

                  <p id="special">Let's make something special.</p>
                </ScrollAnimation>
              </Grid.Column>
            </Grid>
            <ScrollAnimation
              animateIn="fadeInRight"
              delay={500}
              animateOnce={true}
              className="graph"
              afterAnimatedIn={() => {
                handleAnimate();
              }}
            >
              <div className="bar flex">
                <div className="bar fill" style={style.css}></div>
                <div className="tag bold flex">CSS</div>
                <span id="percent">90%</span>
              </div>

              <div className="bar flex">
                <div className="bar fill" style={style.html}></div>
                <div className="tag bold flex">HTML</div>
                <span id="percent">90%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.react}></div>
                <div className="tag bold flex">React/Native</div>
                <span id="percent">80%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.jS}></div>
                <div className="tag bold flex">Javascript</div>
                <span id="percent">80%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.nodeJS}></div>
                <div className="tag bold flex">NodeJS</div>
                <span id="percent">65%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.rubyRails}></div>
                <div className="tag bold flex">Ruby/Rails</div>
                <span id="percent">70%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.uiDesign}></div>
                <div className="tag bold flex">UI Design</div>
                <span id="percent">60%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.photoshop}></div>
                <div className="tag bold flex">Photoshop</div>
                <span id="percent">75%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.typeScript}></div>
                <div className="tag bold flex">Typescript</div>
                <span id="percent">70%</span>
              </div>
              <div className="bar flex">
                <div className="bar fill" style={style.SQL}></div>
                <div className="tag bold flex">SQL</div>
                <span id="percent">80%</span>
              </div>
            </ScrollAnimation>
          </section>
        </Container>
      </div>
    );
  }
}
