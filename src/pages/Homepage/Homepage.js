import React from 'react';
import './Homepage.scss';
import PageContainer from '../../components/PageContainer/PageContainer'
import Hero from '../../components/Hero/Hero'
import TextBlock from '../../components/TextBlock/TextBlock'
import ImageBlock from '../../components/ImageBlock/ImageBlock'
import studioImage from '../../assets/images/studio-image.png'

const Homepage = () => (
  <PageContainer className="homepage">
    <Hero/>
    <TextBlock header="about" body="We’re an architect-led creative studio that delivers spaces, systems, and buildings of all scales to individuals, brands, and institutions. Our identity as designer, contractor, & trusted advisor is fluid throughout the project life-cycle, resulting in healthier relationships with project partners, higher-quality designs, and meaningful cost-savings for our clients. We serve property owners, real estate professionals, architects, interior designers, fabricators, and general contractors across the United States. Our collaborators are creating arts, residences, and capital projects in California & New York."/>
    <TextBlock body="SPEEDBOAT services are based in many years of architectural practice and direct experience of the construction work. We combine the creativity & personalized experience of a boutique design firm with the technical finesse & management acumen of a much larger organization to create uncommon value."/>
    <TextBlock header="people" body="Chad Karty, Project Principal, (American; b. 1985, Detroit, MI; he/him/his) is an architectural professional delivering unique projects to clients in the arts, entertainment, technology, & finance industries."/>
    <TextBlock body="In the past he worked as a carpenter, fabricating contemporary artworks and restoring Greek Revival townhomes. He earned his B.A. and M.Arch at Columbia University, where he received honors and taught design in the New York–Paris Studio. Before forming Speedboat, Chad practiced at several nationally-recognized firms, including MADE, M1DTW, Schuchart/Dow, and Radius Track."/>
    <TextBlock body="He is admitted to the ARE in New York and is a licensed general contractor in California. He lives in Silver Lake, Los Angeles."/>
    <ImageBlock
      className="margin-top"
      img={studioImage}
    />
  </PageContainer>
)

export default Homepage;
