import React from 'react';
import Grid from '@material-ui/core/Grid'
import './VideoItem.scss'
import ReactPlayer from 'react-player'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const VideoItem = ({ url }) => (
    <Grid item xs={12} className="video-wrapper">
        <ReactPlayer 
            className="video-element"
            playing
            loop
            muted
            playsinline
            width="auto"
            url={url}
        />
    </Grid>
)

export default VideoItem;