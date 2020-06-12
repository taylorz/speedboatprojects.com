import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './SpeedboatDescription.scss';

const SpeedboatDescription = () => (
  <FeedItem
    partialBig 
    right
    noPaddingTop
    noPaddingBottom
    className="speedboat-description"
  >
    <Grid container>
      <Grid item xs={12}>
        Speedboat is a design and construction management studio. We enable the imagination of exceptional clients, and design possibilities for added value by reinventing the constraints inherent to unique and challenging projects.
      </Grid>
    </Grid>
  </FeedItem>
)

export default SpeedboatDescription;
