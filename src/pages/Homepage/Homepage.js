import React from 'react';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Hero from '../../components/Hero/Hero'
import TextBlock from '../../components/TextBlock/TextBlock'

const Homepage = () => (
  <PageContainer className="homepage">
    <Hero/>
    <TextBlock statement body="SPEEDBOAT is a dynamic and multifaceted design & construction management studio. We create projects informed by timeless architectural concepts and supported by spatial clarity, detail, and craft. Our unique approach enables the imagination of exceptional clients and makes building projects more fun."/>
  </PageContainer>
)

export default Homepage;
