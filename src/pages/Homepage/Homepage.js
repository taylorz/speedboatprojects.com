import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import StudioDescription from '../../components/StudioDescription/StudioDescription'
import FeedImage from '../../components/FeedImage/FeedImage'
import FeedLibrary from '../../components/FeedLibrary/FeedLibrary'
import FeedGraphic from '../../components/FeedGraphic/FeedGraphic' 
import './Homepage.scss';

// IMAGE AND CONTENT IMPORTS
import construction1 from '../../assets/images/construction1.jpg'
import construction2 from '../../assets/images/construction2.jpg'

import library1 from '../../assets/images/library1.jpg'

import graphic1 from '../../assets/images/single-family-homes.svg'
import graphic2 from '../../assets/images/commercial-interiors.svg'
import graphic3 from '../../assets/images/facades.svg'
import graphic4 from '../../assets/images/core-and-shell.svg'
import graphic5 from '../../assets/images/public-spaces.svg'
import graphic6 from '../../assets/images/adus-pool-houses.svg'

const Homepage = () => (
  <PageContainer className="homepage">
    <SpeedboatMark services="ARCHITECTURE AND CONSTRUCTION MANAGEMENT"/>
    <StudioDescription description="Speedboat is a creative and multifaceted construction company. We develop value-add spaces and design details supported by timeless architectural concepts. Our unique approach enables the imagination of exceptionable clients and makes building projects more fun."/>
    <FeedImage imageUrl={construction2}/>
    <FeedLibrary imageUrl={library1}/>
    <FeedGraphic imageUrl={graphic1} passing/>
    <FeedImage imageUrl={construction1}/>
    <FeedGraphic imageUrl={graphic2} rotating/>
    <FeedLibrary imageUrl={library1}/>
    <FeedGraphic imageUrl={graphic3} blinking/>
    <FeedGraphic imageUrl={graphic4} rotating/>
    <FeedGraphic imageUrl={graphic5} passing/>
    <FeedGraphic imageUrl={graphic6} blinking/>
  </PageContainer>
)

export default Homepage;
