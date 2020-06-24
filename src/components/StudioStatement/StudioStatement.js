import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './StudioStatement.scss';

const StudioStatement = ({ statement }) => (
  <FeedItem
    right
    className="studio-statement"
  >
    <Grid item xs={12} sm={11}>
      {statement}
    </Grid>
  </FeedItem>
)

export default StudioStatement;
