import React, { Component } from "react";
import { Grid, Container, Icon, Segment, Image } from "semantic-ui-react";
import profile from "../images/profile.jpeg";
import piechart from "../images/piechart.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Container fluid>
          <div className="title marker">
            <p>About</p>
          </div>
          <Grid centered>
            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <ScrollAnimation
                className="animated-circle"
                animateIn="expand"
                animateOnce={true}
              >
                <div className="circle">
                  <Icon color="black" name="wait" size="huge" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOnce={true}>
                <div className="skills marker">Fast</div>
                <p>
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <ScrollAnimation
                animateIn="expand"
                delay={500}
                className="animated-circle"
                animateOnce={true}
              >
                <div className="circle">
                  <Icon color="black" name="mobile alternate" size="huge" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={500}
                animateOnce={true}
              >
                <div className="skills marker">Responsive</div>
                <p>My layouts will work on any device, big or small.</p>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <ScrollAnimation
                animateIn="expand"
                animateOnce={true}
                delay={1000}
                className="animated-circle"
              >
                <div className="circle">
                  <Icon color="black" name="lightbulb outline" size="huge" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={1000}
                animateOnce={true}
              >
                <div className="skills marker">Intuitive</div>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
              </ScrollAnimation>
            </Grid.Column>

            <Grid.Column textAlign="center" mobile={16} tablet={8} computer={4}>
              <ScrollAnimation
                animateIn="expand"
                animateOnce={true}
                delay={1500}
                className="animated-circle"
              >
                <div className="circle">
                  <Icon color="black" name="heartbeat" size="huge" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={1500}
                animateOnce={true}
              >
                <div className="skills marker">Dynamic</div>
                <p>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </ScrollAnimation>
            </Grid.Column>
          </Grid>

          <section id="profile">
            <Grid container stackable columns="equal" >
              <Grid.Column  width={5}>
                <ScrollAnimation
                  animateIn="fadeInLeft"
                  delay={500}
                  animateOnce={true}
                >
                  <img
                    src={profile}
                    alt="profile-pic"
                    className="profile"
                  ></img>
                </ScrollAnimation>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="center" width={11}>
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={750}
                  animateOnce={true}
                  className="animate-profile"
                >
                  
                    
                    <p className="skills who marker">Whos's This Guy?</p>
                  
                  
                    <p id="blurb" className="blurb">
                      I'm a recently qualified full stack software engineer
                      living in London, UK. I have previous experience in luxury
                      fashion retail and transitioned to coding to follow my
                      passion and to help companies build intuitive,
                      user-friendly applications and websites. Creative,
                      result-driven, and detail-oriented with strong
                      interpersonal skills. I have serious joy for UI effects,
                      animations and creating dynamic user experiences. <br></br> <br></br>
                          
                          <span id="special">Let's
                      make something special.
                      </span>
                    </p>
                  
                </ScrollAnimation>
              </Grid.Column>
            </Grid>
          </section>

          <Grid
            centered
            verticalAlign="middle"
            columns="equal"
            textAlign="center"
          >
            <Grid.Row only="computer">
              <Grid.Column>
                <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>

                <Segment  id="pie-list" inverted secondary>
                  <div className="skills">Part Designer</div>
                  <ul>
                    <li>UX design</li>
                    <li>UI design</li>
                    <li>Interaction design</li>
                    <li>Research</li>
                    <li>Making it 'pop'</li>
                  </ul>
                </Segment>
                </ScrollAnimation>
              </Grid.Column>
              <Grid.Column width={6}>
              <ScrollAnimation animateIn="fadeIn" duration={2} delay={500} animateOnce={true}>
                <Image src={piechart}></Image>
                </ScrollAnimation>
              </Grid.Column>
              <Grid.Column>
                <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                  <Segment color="teal" id="pie-list" inverted secondary>
                    <div className="skills">Part Coder</div>
                    <ul>
                      <li>Full-stack development</li>
                      <li>Programming paradigms</li>
                      <li>HTML / CSS</li>
                      <li>JavaScript</li>
                      <li>Swearing at computers</li>
                    </ul>
                  </Segment>
                </ScrollAnimation>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
    );
  }
}
