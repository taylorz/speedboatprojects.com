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
    </>
)

export default Hero;