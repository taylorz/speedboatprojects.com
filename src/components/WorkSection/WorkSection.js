import React from 'react';
import Grid from '@material-ui/core/Grid'
import './WorkSection.scss'
import ImageBlock from '../ImageBlock/ImageBlock'
import VideoBlock from '../VideoBlock/VideoBlock'

const WorkSection = ({ workType }) => (
    <Grid container className="work-section-container">
        {workType.map((band) => 
            <>
                <ImageBlock
                img1={band.images[0]}
                img2={band.images[1]}
                />
                {band.video &&
                    <VideoBlock url={band.video}/>
                }
            </>
        )}
    </Grid>
)

export default WorkSection;