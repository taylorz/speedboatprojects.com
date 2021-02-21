import Grid from '@material-ui/core/Grid';
import React from 'react';
import heroVideo from '../../assets/videos/hero-video.mp4';
import VideoBlock from '../VideoItem/VideoItem';
import './Hero.scss';

const Hero = () => (
    <>
        <Grid container className="hero-container">
            <VideoBlock url={heroVideo}/>
        </Grid>
        {/* <Grid container className="hero-text-mobile">
            <Grid item xs={12} className="text-wrapper">
                <div className="hero-text">SPEEDBOAT is a dynamic and multifaceted design & construction management studio. We create projects informed by timeless architectural concepts and supported by spatial clarity, detail, and craft. Our unique approach enables the imagination of exceptional clients and makes building projects more fun.</div>
            </Grid>
        </Grid> */}
    </>
)

export default Hero;