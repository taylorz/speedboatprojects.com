import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import StudioDescription from '../../components/StudioDescription/StudioDescription'
import StudioStatement from '../../components/StudioStatement/StudioStatement'
import StudioServices from '../../components/StudioServices/StudioServices'
import './Homepage.scss';

const Homepage = () => (
  <PageContainer className="homepage">
    <SpeedboatMark
      services="ARCHITECTURE AND CONSTRUCTION MANAGEMENT"
    />
    <StudioDescription
      description="Speedboat is a creative and multifaceted construction company. We develop value-add spaces and design details supported by timeless architectural concepts. Our unique approach enables the imagination of exceptionable clients and makes building projects more fun."
    />
    <StudioStatement
      statement="Speedboat is an architect-led construction firm focused on delivering projects to individuals, brands, and institutions. We employ creativity and technical know-how to build custom construction projects. Our role as designer & contractor is fluid, an approach that leads to better relationships with project partners, which in turn adds the value of a higher-quality design & cost-savings for our clients. Speedboat works with owners, investors, architects, interior designers, & builders in New York and California. Our partners are creating arts, residences, and capital projects in the New York City & Los Angeles markets."
    />
    <StudioServices/>
  </PageContainer>
)

export default Homepage;
