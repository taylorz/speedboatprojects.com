import React from 'react';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Hero from '../../components/Hero/Hero'
import ImageBlock from '../../components/ImageBlock/ImageBlock'

import multifamily from '../../constants/multifamily'

const Homepage = () => (
  <PageContainer className="homepage">
    <Hero/>
    {multifamily.map((band) => 
      <ImageBlock
        img1={band.images[0]}
        img2={band.images[1]}
        projectTitle={band.title}
        projectLocation={band.location}
      />
    )}
  </PageContainer>
)

export default Homepage;
