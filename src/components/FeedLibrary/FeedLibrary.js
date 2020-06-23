import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedLibrary.scss';

const FeedLibrary = ({ className, imageUrl }) => (
  <FeedItem 
    partialSmall
    className={`feed-library ${className}`}
  >
    <Grid container item className="library-item" justify="center" alignItems="center">
      <img src={imageUrl}></img>
    </Grid>
  </FeedItem>
)

export default FeedLibrary;
