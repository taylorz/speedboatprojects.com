import React from 'react';
import Grid from '@material-ui/core/Grid'
import './VideoBlock.scss'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import VideoItem from '../VideoItem/VideoItem'

const VideoBlock = ({ url }) => (
    <Grid container className="video-block-container">
        <MaxWidthWrapper>
            <Grid container className="video-block-inner">
                <VideoItem url={url}/>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default VideoBlock;