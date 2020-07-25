import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export default class About extends Component {
  render() {
    return (
      <div className="about">
        <Container maxWidth="sm">
            <div className = "title">About</div>
        <Grid container spacing={3}>
        <Grid item xs={6} sm={5}>
          <div id = "cut-diamond" ></div>
        </Grid>
        <Grid item xs={6} sm={5}>
          <div id = "cut-diamond" ></div>
        </Grid>
        <Grid item xs={6} sm={5}>
          <div id = "cut-diamond" ></div>
        </Grid>
        <Grid item xs={6} sm={5}>
          <div id = "cut-diamond" ></div>
        </Grid>
        </Grid>
            
        </Container>
      </div>
    );
  }
}
