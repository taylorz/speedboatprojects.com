import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import StudioDescription from '../../components/StudioDescription/StudioDescription'
import './Homepage.scss';

const Homepage = () => (
  <PageContainer className="homepage">
    <SpeedboatMark
      services="ARCHITECTURE AND CONSTRUCTION MANAGEMENT"
    />
    <StudioDescription
      description="Speedboat is a creative and multifaceted construction company. We develop value-add spaces and design details supported by timeless architectural concepts. Our unique approach enables the imagination of exceptionable clients and makes building projects more fun."
    />
  </PageContainer>
)

export default Homepage;
