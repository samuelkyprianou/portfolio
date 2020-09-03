import React, { Component } from "react";
import { Grid, Container, Icon, Segment, Image } from "semantic-ui-react";
import profile from "../images/profile.jpeg";
import piechart from "../images/piechart.png";
import ScrollAnimation from "react-animate-on-scroll";

export default class About extends Component {
  state = { animate: false };

  render() {
    const handleAnimate = () => this.setState({ animate: true });

    const style = {
      css: this.state.animate
      ? { width: "90%" }
      : { width: "0%"},
      html: this.state.animate
      ? { width: "90%" }
      : { width: "0%"},
      react: this.state.animate
        ? { width: "80%" }
        : { width: "0%"},
      jS: this.state.animate
        ? { width: "80%" }
        : { width: "0%"},
      nodeJS: this.state.animate
        ? { width: "65%" }
        : { width: "0%"},
      rubyRails: this.state.animate
        ? { width: "70%" }
        : { width: "0%"},
      uiDesign: this.state.animate
        ? { width: "60%" }
        : { width: "0%"},
      photoshop: this.state.animate
        ? { width: "75%" }
        : { width: "0%"},
      typeScript: this.state.animate
        ? { width: "70%" }
        : { width: "0%"},
      SQL: this.state.animate
        ? { width: "80%" }
        : { width: "0%"},
    };
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
            <Grid stackable columns="equal">
              <Grid.Column className="profile-pic" >
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
              <Grid.Column floated="right" textAlign="center">
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={750}
                  animateOnce={true}
                  className="animate-profile"
                >
                  <p className="skills who marker">Whos's This Guy?</p>

                  <p id="blurb" className="blurb">
                    I'm a recently qualified full stack software engineer living
                    in London, UK. I have previous experience in luxury fashion
                    retail and transitioned to coding to follow my passion and
                    to help companies build intuitive, user-friendly
                    applications and websites. Creative, result-driven, and
                    detail-oriented with strong interpersonal skills. I have
                    serious joy for UI effects, animations and creating dynamic
                    user experiences. <br></br> <br></br>
                  </p>

                  <p id="special">Let's make something special.</p>
                </ScrollAnimation>
              </Grid.Column>
              <Grid.Column floated="right" textAlign="center" >
                <ScrollAnimation
                  animateIn="fadeInRight"
                  delay={750}
                  animateOnce={true}
                  className="animate-profile"
                  afterAnimatedIn={() => {
                    console.log("hi");
                    handleAnimate();
                  }}
                >
                  <div className="bar flex">
                    <div className="bar fill" style={style.css}>
                      <div class="tag bold flex">CSS</div>
                    </div>
                    <span id="percent">90%</span>
                  </div>

                  <div className="bar flex">
                    <div className="bar fill" style={style.html}>
                      <div class="tag bold flex">HTML</div>
                    </div>
                    <span id="percent">90%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.react}>
                      <div class="tag bold flex">React</div>
                    </div>
                    <span id="percent">80%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.jS}>
                      <div class="tag bold flex">Javascript</div>
                    </div>
                    <span id="percent">80%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.nodeJS}>
                      <div class="tag bold flex">NodeJS</div>
                    </div>
                    <span id="percent">65%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.rubyRails}>
                      <div class="tag bold flex">Ruby/Rails</div>
                    </div>
                    <span id="percent">70%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.uiDesign}>
                      <div class="tag bold flex">UI Design</div>
                    </div>
                    <span id="percent">60%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.photoshop}>
                      <div class="tag bold flex">Photoshop</div>
                    </div>
                    <span id="percent">75%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.typeScript}>
                      <div class="tag bold flex">Typescript</div>
                    </div>
                    <span id="percent">70%</span>
                  </div>
                  <div className="bar flex">
                    <div className="bar fill" style={style.SQL}>
                      <div class="tag bold flex">SQL</div>
                    </div>
                    <span id="percent">80%</span>
                  </div>
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
                  <Segment id="pie-list" inverted secondary>
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
                <ScrollAnimation
                  animateIn="fadeIn"
                  duration={2}
                  delay={500}
                  animateOnce={true}
                >
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
