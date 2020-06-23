import React from 'react';
import Grid from '@material-ui/core/Grid';
import FeedItem from '../FeedItem/FeedItem';
import './StudioServices.scss';
import DESIGN_SERVICES from '../../constants/design-services';
import CONSTRUCTION_SERVICES from '../../constants/construction-services';

const StudioServices = () => (
  <FeedItem
    half
    className="studio-services"
  >
    <Grid item xs={12} sm={6}>
      <div className="services-header">DESIGN</div>
      <ul>
        {DESIGN_SERVICES.map(service => 
          <li>{service}</li>
        )}
      </ul>
    </Grid>
    <Grid item xs={12} sm={6}>
      <div className="services-header">CONSTRUCTION MANAGEMENT</div>
      <ul>
        {CONSTRUCTION_SERVICES.map(service => 
          <li>{service}</li>
        )}
      </ul>
    </Grid>
  </FeedItem>
)

export default StudioServices;
