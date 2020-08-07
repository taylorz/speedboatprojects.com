import React, { component, useEffect } from 'react'
import Grid from '@material-ui/core/Grid'
import './PageContainer.scss'
import Footer from '../Footer/Footer'

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
    </Grid>
    </>
  )
}
export default PageContainer;
