import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import StudioDescription from '../../components/StudioDescription/StudioDescription'
import FeedImage from '../../components/FeedImage/FeedImage'
import FeedLibrary from '../../components/FeedLibrary/FeedLibrary' 
import './Homepage.scss';

// IMAGE AND CONTENT IMPORTS
import construction1 from '../../assets/images/construction1.jpg'

import library1 from '../../assets/images/library1.jpg'

const Homepage = () => (
  <PageContainer className="homepage">
    <SpeedboatMark services="ARCHITECTURE AND CONSTRUCTION MANAGEMENT"/>
    <StudioDescription description="Speedboat is a creative and multifaceted construction company. We develop value-add spaces and design details supported by timeless architectural concepts. Our unique approach enables the imagination of exceptionable clients and makes building projects more fun."/>
    <FeedImage imageUrl={construction1}/>
    <FeedLibrary imageUrl={library1}/>
    <FeedLibrary imageUrl={library1}/>
  </PageContainer>
)

export default Homepage;
