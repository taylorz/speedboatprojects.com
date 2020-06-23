import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './StudioDescription.scss';

const StudioDescription = ({ description }) => (
  <FeedItem
    right
    noPaddingTop
    className="studio-description"
  >
    <Grid item xs={12} sm={11}>
      {description}
    </Grid>
  </FeedItem>
)

export default StudioDescription;
