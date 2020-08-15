import React from 'react';
import Grid from '@material-ui/core/Grid'
import './Hero.scss'

import heroVideo from '../../assets/videos/hero-video.mp4'
import heroGif from '../../assets/images/hero-gif.gif'

const Hero = () => (
    <Grid container className="hero-container">
        <Grid item xs={12} className="video-wrapper">
            <video className="hero-video" autoPlay muted loop src={heroVideo}/>
            <img className="hero-image" src={heroGif}/>
        </Grid>
    </Grid>
)

export default Hero;