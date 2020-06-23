import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedGraphic.scss';

const FeedGraphic = ({ className, imageUrl }) => (
  <FeedItem 
    partialMedium
    className={`feed-graphic ${className}`}
  >
    <Grid container item className="graphic-item" justify="center" alignItems="center">
      <img src={imageUrl}></img>
    </Grid>
  </FeedItem>
)

export default FeedGraphic;
