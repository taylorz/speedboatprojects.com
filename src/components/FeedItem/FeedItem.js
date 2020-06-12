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
    partialBig,
    partialSmall,
    half,
    noPaddingTop,
    noPaddingBottom,
    noPaddingLeft,
    noPaddingRight,
  }) => (
    <Grid container 
      className={`
        feed-item
        ${className}
        ${noPaddingTop && 'no-padding-top'}
        ${noPaddingBottom && 'no-padding-bottom'}
        ${noPaddingLeft && 'no-padding-left'}
        ${noPaddingRight && 'no-padding-right'}
      `} 
      justify={
        center ? "center" : 
        left ? "flex-start" : 
        right ? "flex-end" : 
        "flex-start"
      }
    >
      <Grid 
        item
        xs={12}
        sm={
          full ? "12" : 
          partialBig ? "11" : 
          partialSmall ? "8" :
          half ? "6" : 
          "12"
        }
      >
        {children}
      </Grid>
    </Grid>
  )

export default FeedItem;
