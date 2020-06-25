import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './FeedArtifact.scss';

const FeedArtifact = ({ className, imageUrl, right }) => (
  <FeedItem 
    full
    className={`feed-artifact ${className}`}
  >
    <Grid item container xs={12} className="artifact-item" alignItems="center" justify={right ? "flex-end" : "flex-start"}>
      <img src={imageUrl}></img>
    </Grid>
  </FeedItem>
)

export default FeedArtifact;
