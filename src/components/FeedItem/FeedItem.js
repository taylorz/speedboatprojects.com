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
        right ? "flex-end" : 
        "flex-start"
      }
    >
      <Grid 
        item
        xs={12}
        md={
          partialBig ? "11" : 
          partialMedium ? "8" :
          partialSmall ? "4" :
          half ? "6" : 
          "12"
        }
      >
        {children}
      </Grid>
    </Grid>
  )

export default FeedItem;
