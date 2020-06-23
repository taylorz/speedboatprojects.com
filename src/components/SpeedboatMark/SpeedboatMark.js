import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import FeedItem from '../FeedItem/FeedItem';
import './SpeedboatMark.scss';

const SpeedboatMark = ({ services }) => (
  <FeedItem 
    partialMedium
    left
    noPaddingBottom
    className="speedboat-mark"
  >
    <Grid container>
      <Grid item xs={6} sm={5} md={4} className="mark">
          <Link to="/">SPEEDBOAT</Link>
      </Grid>
      <Grid item xs={6} sm={9} md={8} className="service">
          {services}
      </Grid>
    </Grid>
  </FeedItem>
)

export default SpeedboatMark;
