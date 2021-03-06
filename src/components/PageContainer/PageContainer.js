import Grid from '@material-ui/core/Grid'
import React, { useEffect } from 'react'
import { Element } from 'react-scroll'
import Footer from '../Footer/Footer'
import './PageContainer.scss'

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
