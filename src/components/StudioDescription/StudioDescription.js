import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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
      {description} <Link smooth to="/#footer">Learn More.</Link>
    </Grid>
  </FeedItem>
)

export default StudioDescription;
