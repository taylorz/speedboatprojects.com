import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import SpeedboatDescription from '../../components/SpeedboatDescription/SpeedboatDescription'
import './Homepage.scss';

const Homepage = () => (
  <PageContainer className="homepage">
    <SpeedboatMark/>
    <SpeedboatDescription/>
  </PageContainer>
)

export default Homepage;
