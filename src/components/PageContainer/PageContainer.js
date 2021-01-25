import React, { component, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import './PageContainer.scss'
import Footer from '../Footer/Footer'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const PageContainer = ({ className, children }) => {
  useEffect(() => {
    setTimeout(() => window.scrollTo(0, 0), 1500)
  }, [])
  return(
    <>

    <Grid container className={`page-container ${className}`}>
      <Grid item xs={12}>
          {children}
      </Grid>
      <Footer/>
      <Element name="test1"/>
    </Grid>
    </>
  )
}
export default PageContainer;
