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
    <Ribbon multifamily/>
    <WorkSection workType={kitchens}/>
    <Ribbon kitchens/>
    <WorkSection workType={customhomes}/>
    <Ribbon customhomes/>
    <WorkSection workType={publicurban}/>
    <Ribbon publicurban/>
  </PageContainer>
)

export default Homepage;
