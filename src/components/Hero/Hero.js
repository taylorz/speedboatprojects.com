import React from 'react';
import Grid from '@material-ui/core/Grid'
import './Hero.scss'

import heroVideo from '../../assets/videos/hero-video.mp4'

const Hero = () => (
    <Grid container className="hero-container">
        <Grid item xs={12} className="video-wrapper">
            <video className="hero-video" autoPlay loop muted src={heroVideo}/>
        </Grid>
    </Grid>
)

export default Hero;