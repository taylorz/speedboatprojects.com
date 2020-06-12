import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './FeedItem.scss';

const FeedItem = ({ 
    className,
    children,
    center,
    left,
    right,
    full,
    partial,
    half,
  }) => (
    <Grid container 
      className={`
        feed-item
        ${className}
      `} 
      justify={`
        ${center && 'center'} 
        ${left && 'flex-start'} 
        ${right && 'flex-end'} 
      `}
    >
      <Grid 
        item
        xs={12}
        sm={`
          ${full && 12}
          ${partial && 8}
          ${half && 6}
        `}
      >
        {children}
      </Grid>
    </Grid>
  )

export default FeedItem;
