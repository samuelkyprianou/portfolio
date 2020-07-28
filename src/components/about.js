import React, { Component } from "react";
import { Grid, Container, Icon } from "semantic-ui-react";
import profile from "../images/profile.jpeg";
import ScrollAnimation from 'react-animate-on-scroll';


export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Container fluid>
          <div className="title"><p>About</p></div>
          <Grid stackable centered columns={4}>
            <Grid.Column textAlign="center">
            <ScrollAnimation animateIn="expand" initiallyVisible="false">
              <div className="circle">
                <Icon color="black" name="wait" size="huge" />
              </div>
            </ScrollAnimation>
              <div className="skills">Fast</div>
              <p>
                Fast load times and lag free interaction, my highest priority.
              </p>
            </Grid.Column>

            <Grid.Column textAlign="center">
            <ScrollAnimation animateIn="expand" initiallyVisible="false" delay={500}>
              <div className="circle">
                <Icon color="black" name="mobile alternate" size="huge" />
              </div>
              </ScrollAnimation>
              <div className="skills">Responsive</div>
              <p>My layouts will work on any device, big or small.</p>
            </Grid.Column>

            <Grid.Column textAlign="center">
            <ScrollAnimation animateIn="expand" initiallyVisible="false" delay={1000}>
              <div className="circle">
                <Icon color="black" name="lightbulb outline" size="huge" />
              </div>
              </ScrollAnimation>
              <div className="skills">Intuitive</div>
              <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </Grid.Column>

            <Grid.Column textAlign="center">
            <ScrollAnimation animateIn="expand" initiallyVisible="false" delay={1500}>
              <div className="circle">
                <Icon color="black" name="heartbeat" size="huge" />
              </div>
              </ScrollAnimation>
              <div className="skills">Dynamic</div>
              <p>
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </Grid.Column>
          </Grid>
          <Grid stackable centered columns={2}>
            <Grid.Column textAlign="center">
                <img src={profile} className="profile"></img>
                <div className="skills">Whos's This Guy?</div>
                <p>I'm a recently qualified full stack software engineer living in London, UK.
I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
Let's make something special.</p>
            </Grid.Column>
            <Grid.Column textAlign="center"></Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}
