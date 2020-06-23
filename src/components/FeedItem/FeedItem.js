import React from 'react';
import Grid from '@material-ui/core/Grid';
import './FeedItem.scss';

const FeedItem = ({ 
    className,
    children,
    center,
    right,
    partialBig,
    partialMedium,
    partialSmall,
    half,
    noPaddingTop,
    noPaddingBottom,
    noPaddingLeft,
    noPaddingRight
  }) => (
    <Grid 
      item
      container
      className={`
        feed-item
        ${noPaddingTop && 'no-padding-top'}
        ${noPaddingBottom && 'no-padding-bottom'}
        ${noPaddingLeft && 'no-padding-left'}
        ${noPaddingRight && 'no-padding-right'}
      `} 
      xs={12}
      md={
        partialBig ? "11" : 
        partialMedium ? "8" :
        partialSmall ? "4" :
        half ? "6" : 
        "12"
      }
    >
      <Grid
        item
        container
        className={className}
        justify={
          center ? "center" : 
          right ? "flex-end" : 
          "flex-start"
        }
      >
        {children}
      </Grid>
    </Grid>
  )

export default FeedItem;
