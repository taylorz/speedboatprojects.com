import React from 'react';
import Grid from '@material-ui/core/Grid'
import './Hero.scss'

import heroVideo from '../../assets/videos/hero-video.mp4'

const Hero = () => (
    <Grid container className="hero-container">
        <Grid item xs={12} className="video-wrapper">
            <video className="hero-video" autoPlay loop muted src={heroVideo}/>
        </Grid>
        <Grid item xs={12} className="text-wrapper">
            <div className="hero-text">SPEEDBOAT is a dynamic and multifaceted design & construction management studio. We create projects informed by timeless architectural concepts and supported by spatial clarity, detail, and craft. Our unique approach enables the imagination of exceptional clients and makes building projects more fun.</div>
        </Grid>
    </Grid>
)

export default Hero;