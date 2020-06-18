import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './StudioDescription.scss';

const StudioDescription = ({ description }) => (
  <FeedItem
    partialBig 
    right
    noPaddingTop
    noPaddingBottom
    className="studio-description"
  >
    <Grid container>
      <Grid item xs={12}>
        {description}
      </Grid>
    </Grid>
  </FeedItem>
)

export default StudioDescription;
