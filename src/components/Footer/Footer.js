import React from 'react';
import Grid from '@material-ui/core/Grid';
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import StudioStatement from '../../components/StudioStatement/StudioStatement'
import StudioInformation from '../../components/StudioInformation/StudioInformation'
import FeedItem from '../FeedItem/FeedItem';
import './Footer.scss';

const Footer = ({ className }) => (
  <FeedItem
    className={`feed-footer ${className}`}
  >
    <Grid container item id="footer">
      <SpeedboatMark services="ARCHITECTURE AND CONSTRUCTION MANAGEMENT"/>
      <StudioStatement statement="Speedboat is an architect-led construction firm focused on delivering projects to individuals, brands, and institutions. We employ creativity and technical know-how to build custom construction projects. Our role as designer & contractor is fluid, an approach that leads to better relationships with project partners, which in turn adds the value of a higher-quality design & cost-savings for our clients. Speedboat works with owners, investors, architects, interior designers, & builders in New York and California. Our partners are creating arts, residential, and capital projects in the New York City & Los Angeles markets."/>
      <StudioInformation/>
    </Grid>
  </FeedItem>
)

export default Footer;
