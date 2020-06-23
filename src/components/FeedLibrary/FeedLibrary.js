import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedLibrary.scss';

const FeedLibrary = ({ className, imageUrl }) => (
  <FeedItem 
    partialSmall
    noPaddingBottom
    className={`feed-library ${className}`}
  >
    <Grid item className="library-item">
      <img src={imageUrl}></img>
    </Grid>
  </FeedItem>
)

export default FeedLibrary;
