import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const Footer = () => (
    <Grid container className="footer-container">
        <MaxWidthWrapper>
            <Grid container className="footer-inner" justify="space-between">
                <Grid item xs={12} className="copyright">
                    © SPEEDBOAT, 2020. All rights reserved. Any redistribution or reproduction of part or all of the contents of this website in any form is prohibited. You may not transmit it or store it in any other website or other form of electronic retrieval system without the prior written permission of SPEEDBOAT.
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default Footer;