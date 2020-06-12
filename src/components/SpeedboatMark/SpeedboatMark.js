import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './SpeedboatMark.scss';

const SpeedboatMark = ({ className, children }) => (
  <FeedItem partial left className="speedboat-mark">
    <Grid container className={className}>
      <Grid item xs={6} sm={2} className="mark">
          SPEEDBOAT
      </Grid>
      <Grid item xs={6} sm={8}>
          ARCHITECTURE AND CONSTRUCTION MANAGEMENT
      </Grid>
    </Grid>
  </FeedItem>
)

export default SpeedboatMark;
