import React from 'react';
import Hero from '../../components/Hero/Hero';
import PageContainer from '../../components/PageContainer/PageContainer';
import Ribbon from '../../components/Ribbon/Ribbon';
import WorkSection from '../../components/WorkSection/WorkSection';
import customhomes from '../../constants/customhomes';
import kitchens from '../../constants/kitchens';
import multifamily from '../../constants/multifamily';
import publicurban from '../../constants/publicurban';
import './Homepage.scss';


const Homepage = () => (
  <PageContainer className="homepage">
    <Hero/>
    <WorkSection workType={multifamily}/>
    <div className="wrapper-Ribbon">
    <Ribbon multifamily/>
    </div>
    
    <WorkSection workType={kitchens}/>

    <div className="wrapper-Ribbon">
    <Ribbon kitchens/>
    </div>

    <WorkSection workType={customhomes}/>

 
    <div className="wrapper-Ribbon">
      <Ribbon customhomes/>
    </div>
    
    <WorkSection workType={publicurban}/>

    <div className="wrapper-Ribbon">
      <Ribbon publicurban/>
    </div>
  </PageContainer>
)

export default Homepage;
