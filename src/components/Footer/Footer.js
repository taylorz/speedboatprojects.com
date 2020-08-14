import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const Footer = () => (
    <Grid container className="footer-container">
        <MaxWidthWrapper>
            <Grid container className="footer-inner" justify="space-between">
                <Grid item xs={12} className="copyright">
                    © SPEEDBOAT, 2020. All rights reserved.
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default Footer;