import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedImage.scss';

const FeedImage = ({ className, imageUrl }) => (
  <FeedItem 
    center
    className={`feed-image ${className}`}
  >
    <Grid container item xs={12} sm={10} className="image-item" justify="center" alignItems="center">
      <img src={imageUrl}></img>
    </Grid>
  </FeedItem>
)

export default FeedImage;
