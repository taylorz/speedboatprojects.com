import React from 'react';
import Grid from '@material-ui/core/Grid'
import './Transition.scss'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const Transition = ({ textColor, backgroundColor, statement }) => (
    <Grid container className="transition-container" style={{backgroundColor: backgroundColor}}>
        <MaxWidthWrapper>
            <Grid container className="transition-inner" justify="center" align-items="center">
                <Grid item xs={12} className="transition-text">
                    <p style={{color: textColor}}>{statement}</p>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default Transition;