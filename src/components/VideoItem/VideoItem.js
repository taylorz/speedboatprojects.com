import Grid from '@material-ui/core/Grid';
import React from 'react';
import ReactPlayer from 'react-player';
import './VideoItem.scss';

const VideoItem = ({ url }) => (
    <Grid item xs={12} className="video-wrapper">
        <ReactPlayer 
            className="video-element"
            playing
            loop
            muted
            playsinline
            height="auto"
            url={url}
        />
    </Grid>
)

export default VideoItem;