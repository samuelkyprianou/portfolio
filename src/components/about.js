import React, { Component } from "react";
import { Grid, Container, Icon } from 'semantic-ui-react'

export default class About extends Component {
  render() {
    return (
      <div className="about">
          <Container fluid>
       <div className="title">About</div>
        <Grid stackable centered columns={4} >
            <Grid.Column textAlign="center">
             <div className="circle"> <Icon color="black" name="wait" size="huge"/></div>
             <div className="skills">Fast</div>
             <p>Fast load times and lag free interaction, my highest priority.</p>
            </Grid.Column>

            <Grid.Column textAlign="center">
            <div className="circle"><Icon color="black" name="mobile alternate" size="huge"/></div>
            <div className="skills">Responsive</div>
            <p>My layouts will work on any device, big or small.</p>
            </Grid.Column>

            <Grid.Column textAlign="center">
            <div className="circle"><Icon color="black" name="lightbulb outline" size="huge"/></div>
            <div className="skills">Intuitive</div>
            <p>Strong preference for easy to use, intuitive UX/UI.</p>
            </Grid.Column>

            <Grid.Column textAlign="center">
            <div className="circle"><Icon color="black" name="heartbeat" size="huge"/></div>
            <div className="skills">Dynamic</div>
            <p>
            Websites don't have to be static, I love making pages come to life.
            </p>
            </Grid.Column>
        </Grid>
        </Container>
        
      </div>
    );
  }
}
