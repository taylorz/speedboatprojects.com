import React from 'react';
import Grid from '@material-ui/core/Grid'
import './Hero.scss'
import ReactPlayer from 'react-player'

import heroVideo from '../../assets/videos/hero-video.mp4'
import heroImage from '../../assets/images/hero-image.png'

const Hero = () => (
    <Grid container className="hero-container">
        <Grid item xs={12} className="video-wrapper">
            {/* <ReactPlayer 
                url={heroVideo}
                muted={true}
                controls={false}
                loop={true}
                playing={true}
                playsineline={true}
                className="hero-video"
            /> */}
            <video className="hero-video" autoPlay muted loop src={heroVideo}/>
            <img className="hero-image" src={heroImage}/>
        </Grid>
    </Grid>
)

export default Hero;