import React from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss';

const PageContainer = ({ className, children }) => (
  <Grid container className={`page-container ${className}`} spacing={2}>
    {children}
  </Grid>
)

export default PageContainer;
