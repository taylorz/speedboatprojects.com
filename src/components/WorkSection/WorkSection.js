import React from 'react';
import Grid from '@material-ui/core/Grid'
import './WorkSection.scss'
import ImageBlock from '../ImageBlock/ImageBlock'
import VideoBlock from '../VideoBlock/VideoBlock'
import Ribbon from '../Ribbon/Ribbon'

const WorkSection = ({ workType }) => (
    <Grid container className="work-section-container">
        {workType.map((band) => 
            <>
                <ImageBlock
                img1={band.images[0]}
                img2={band.images[1]}
                caption1={band.captions[0]}
                caption2={band.captions[1]}
                projectTitle={band.title}
                projectLocation={band.location}
                />
                {band.video &&
                    <VideoBlock url={band.video}/>
                }
            </>
        )}
    </Grid>
)

export default WorkSection;