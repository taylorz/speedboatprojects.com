import Grid from '@material-ui/core/Grid';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import './ImageBlock.scss';

const ImageBlock = ({ img1, img2, projectTitle, projectLocation }) => (
    <Grid container className="image-block-container">
        <MaxWidthWrapper>
            <div className="image-block-outer">
                <div className={`outer-project-details`}>
                    <div className="details-text">
                        <span>{projectTitle} {projectLocation}</span>
                    </div>
                </div>
                <Grid container className="image-block-inner">
                    <Grid item xs={12}  className="image-block-wrapper">
                        <img src={img1} alt=""/>
                    </Grid>
                    <Grid item xs={12} className="image-block-wrapper">
                        <img src={img2} alt=""/>
                    </Grid>
                </Grid>
            </div>
        </MaxWidthWrapper>
    </Grid>
)

export default ImageBlock;