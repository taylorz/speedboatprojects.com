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
      description="SPEEDBOAT is a dynamic and multifaceted design & construction management studio. We create projects informed by timeless architectural concepts and supported by spatial clarity, detail, and craft. Our unique approach enables the imagination of exceptional clients and makes building projects more fun. CALL US (323) 450-7551"
    />
  </PageContainer>
)

export default Homepage;
