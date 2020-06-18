import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './StudioStatement.scss';

const StudioStatement = ({ statement }) => (
  <FeedItem
    partialBig
    right
    noPaddingTop
    noPaddingBottom
    className="studio-statement"
  >
    <Grid container>
      <Grid item xs={12}>
        {statement}
      </Grid>
    </Grid>
  </FeedItem>
)

export default StudioStatement;
