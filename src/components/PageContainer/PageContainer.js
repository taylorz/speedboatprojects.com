import React from 'react';
import Grid from '@material-ui/core/Grid';
import './PageContainer.scss';

const PageContainer = ({ className, children }) => (
  <Grid container className={`page-container ${className}`}>
    <Grid item xs={12}>
        {children}
    </Grid>
  </Grid>
)

export default PageContainer;
