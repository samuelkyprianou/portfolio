import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import profile from "../images/profile.webp";
import profileJpg from "../images/profile.jpeg";
import ScrollAnimation from "react-animate-on-scroll";
import { faMobileAlt, faHeartbeat } from "@fortawesome/free-solid-svg-icons";
import { faClock, faLightbulb } from "@fortawesome/free-regular-svg-icons";
import SkillCircle from "../components/SkillCircle";
import SkillBlurb from "../components/SkillBlurb";
import Bar from "../components/Bar";

import "../StyleSheets/Grid.css"

export default class About extends Component {
  state = { animate: false };

  handleAnimate = () => this.setState({ animate: true });

  barChart = () => {
    const barStyles = [
      { CSS: { width: "90%" } },
      { HTML: { width: "90%" } },
      { React: { width: "80%" } },
      { JavaScript: { width: "80%" } },
      { NodeJS: { width: "65%" } },
      { "Ruby/Rails": { width: "70%" } },
      { "UI Design": { width: "60%" } },
      { Photoshop: { width: "75%" } },
      { TypeScript: { width: "70%" } },
      { SQL: { width: "80%" } },
    ];
    let delayDuration = 0
    let bars = barStyles.map((style) => {
      let barSkill = Object.keys(style)[0];
      delayDuration+=0.1
      return (
        <Bar
        delay = {delayDuration}
          fill={this.state.animate ? style[barSkill] : { width: "0%" }}
          skill={barSkill}
          percent={style[barSkill].width}
        />
      );
    });
    return bars;
  };

  render() {
    const ImgWithFallback = ({
      src,
      fallback,
      type = "image/webp",
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

    const skillBlurbs = [
      {
        title: "Fast",
        blurb: "Fast load times and lag free interaction, my highest priority.",
      },
      {
        title: "Responsive",
        blurb: "My layouts will work on any device, big or small.",
      },
      {
        title: "Intuitive",
        blurb: "Strong preference for easy to use, intuitive UX/UI.",
      },
      {
        title: "Dynamic",
        blurb:
          "Websites don't have to be static, I love making pages come to life.",
      },
    ];

    return (
      <div id="about" className="container">
       
          <div className="title">
            <h1>About</h1>
          </div>
          <Grid centered>
            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <SkillCircle icon={faClock} delay={0} />
              <SkillBlurb text={skillBlurbs[0]} delay={0} />
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <SkillCircle icon={faMobileAlt} delay={250} />
              <SkillBlurb text={skillBlurbs[1]} delay={250} />
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <SkillCircle icon={faLightbulb} delay={500} />
              <SkillBlurb text={skillBlurbs[2]} delay={500} />
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <SkillCircle icon={faHeartbeat} delay={750} />
              <SkillBlurb text={skillBlurbs[3]} delay={750} />
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
                this.handleAnimate();
              }}
            >
              {this.barChart()}
            </ScrollAnimation>
          </section>
      
      </div>
    );
  }
}
