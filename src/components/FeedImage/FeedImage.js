import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedImage.scss';

const FeedImage = ({ className, imageUrl }) => (
  <FeedItem 
    partialMedium
    center
    noPaddingBottom
    className={`feed-image ${className}`}
  >
    <Grid container>
      <Grid item xs={12} className="image-item">
        <img src={imageUrl}></img>
      </Grid>
    </Grid>
  </FeedItem>
)

export default FeedImage;
