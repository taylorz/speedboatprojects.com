import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import FeedItem from '../FeedItem/FeedItem';
import './SpeedboatMark.scss';

const SpeedboatMark = ({ children }) => (
  <FeedItem 
    partialBig
    left
    noPaddingBottom
    className="speedboat-mark"
  >
    <Grid container>
      <Grid item xs={6} sm={4} md={2} className="mark">
          <Link to="/">SPEEDBOAT</Link>
      </Grid>
      <Grid item xs={6} sm={8} md={10} className="service">
          ARCHITECTURE AND CONSTRUCTION MANAGEMENT
      </Grid>
    </Grid>
  </FeedItem>
)

export default SpeedboatMark;
