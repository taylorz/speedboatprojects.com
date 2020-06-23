import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedGraphic.scss';

const FeedGraphic = ({ className, imageUrl, rotating, passing, blinking }) => (
  <FeedItem 
    partialMedium
    className={`feed-graphic ${className}`}
  >
    <Grid container item className={`graphic-item`} justify="center" alignItems="center">
      <img src={imageUrl} className={`graphic-image ${rotating && 'rotating'} ${passing && 'passing'} ${blinking && 'blinking'}`}></img>
    </Grid>
  </FeedItem>
)

export default FeedGraphic;
