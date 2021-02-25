import Grid from '@material-ui/core/Grid';
import React from 'react';
import ImageBlock from '../ImageBlock/ImageBlock';
import VideoBlock from '../VideoBlock/VideoBlock';
import './WorkSection.scss';

const WorkSection = ({ workType }) => (
    
    <Grid container className="work-section-container">
        {workType.map((band) => 
            <>
                <ImageBlock
                    img1={band.image}
                />
                {band.video &&
                    <VideoBlock url={band.video}/>
                }
            </>
        )}
    </Grid>
)

export default WorkSection;