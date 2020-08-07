import React from 'react';
import PageContainer from '../../components/PageContainer/PageContainer'
import './Contact.scss';
import ImageBlock from '../../components/ImageBlock/ImageBlock'
import TextBlock from '../../components/TextBlock/TextBlock'

import contactImage from '../../assets/images/contact-image.png'

const Contact = () => (
  <PageContainer className="contact">
    <ImageBlock
      img={contactImage}
    />
    <TextBlock header="Chad Karty" body="Los Angeles, CA"/>
    <TextBlock list={[
      "(323) 450-7551",
      "ckarty@speedboatprojects.com",
    ]}/>
  </PageContainer>
)

export default Contact;