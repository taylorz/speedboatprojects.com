import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import SpeedboatMark from '../../components/SpeedboatMark/SpeedboatMark'
import StudioDescription from '../../components/StudioDescription/StudioDescription'
import FeedImage from '../../components/FeedImage/FeedImage'
import FeedLibrary from '../../components/FeedLibrary/FeedLibrary'
import FeedGraphic from '../../components/FeedGraphic/FeedGraphic' 
import FeedArtifact from '../../components/FeedArtifact/FeedArtifact'
import Footer from '../../components/Footer/Footer' 
import './Homepage.scss';

// IMAGE AND CONTENT IMPORTS
import construction1 from '../../assets/images/construction1.jpg'
import construction2 from '../../assets/images/construction2.jpg'
import construction3 from '../../assets/images/construction3.jpg'
import construction4 from '../../assets/images/construction4.jpg'
import construction5 from '../../assets/images/construction5.jpg'

import library1 from '../../assets/images/library1.jpg'

import graphic1 from '../../assets/images/single-family-homes.svg'
import graphic2 from '../../assets/images/commercial-interiors.svg'
import graphic3 from '../../assets/images/facades.svg'
import graphic4 from '../../assets/images/core-and-shell.svg'
import graphic5 from '../../assets/images/public-spaces.svg'
import graphic6 from '../../assets/images/adus-pool-houses.svg'
import graphic7 from '../../assets/images/kitchens.gif'

import artifact1 from '../../assets/images/zine1.jpg'
import artifact2 from '../../assets/images/pier-sf.gif'
import artifact3 from '../../assets/images/lucas.png'
import artifact4 from '../../assets/images/pfeiffer.jpg'

const Homepage = () => (
  <PageContainer className="homepage">
    <SpeedboatMark services="DESIGN AND CONSTRUCTION MANAGEMENT"/>
    <StudioDescription description="Speedboat is a creative and multifaceted construction company. We develop value-add spaces and design details supported by timeless architectural concepts. Our unique approach enables the imagination of exceptionable clients and makes building projects more fun."/>

    <FeedImage imageUrl={construction1}/>
    <FeedGraphic imageUrl={graphic1} passing/>
    <FeedLibrary imageUrl={library1}/>
    <FeedArtifact imageUrl={artifact1}/>
    <FeedImage imageUrl={construction2}/>
    <FeedLibrary imageUrl={library1}/>
    <FeedGraphic imageUrl={graphic2} rotating/>
    <FeedArtifact imageUrl={artifact2}/>
    <FeedImage imageUrl={construction3}/>
    <FeedGraphic imageUrl={graphic3} walking/>
    <FeedLibrary imageUrl={library1}/>
    <FeedArtifact imageUrl={artifact3}/>
    <FeedImage imageUrl={construction4}/>
    <FeedLibrary imageUrl={library1}/>
    <FeedGraphic imageUrl={graphic4} rotating/>
    <FeedArtifact right imageUrl={artifact4}/>
    <FeedImage imageUrl={construction5}/>
    <FeedGraphic imageUrl={graphic5} passing/>
    <FeedLibrary imageUrl={library1}/>
    <FeedImage imageUrl={construction5}/>
    <FeedLibrary imageUrl={library1}/>
    <FeedGraphic imageUrl={graphic6} walking/>
    <FeedImage imageUrl={construction5}/>
    <FeedGraphic imageUrl={graphic7} rotating/>
    <Footer/>

  </PageContainer>
)

export default Homepage;
