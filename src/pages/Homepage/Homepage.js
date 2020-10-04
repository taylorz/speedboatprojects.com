import React, {component} from 'react';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Hero from '../../components/Hero/Hero'
import WorkSection from '../../components/WorkSection/WorkSection'
import Ribbon from '../../components/Ribbon/Ribbon'

import multifamily from '../../constants/multifamily'
import kitchens from '../../constants/kitchens'
import customhomes from '../../constants/customhomes'
import publicurban from '../../constants/publicurban'

const workTypes=[multifamily, kitchens, customhomes, publicurban]

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
