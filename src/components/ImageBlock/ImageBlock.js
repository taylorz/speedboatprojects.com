import React from 'react';
import Grid from '@material-ui/core/Grid'
import './ImageBlock.scss'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const ImageBlock = ({ img1, img2, caption1, caption2, projectTitle, projectLocation }) => (
    <Grid container className="image-block-container">
        <MaxWidthWrapper>
            <div className="image-block-outer">
                <div className={`outer-project-details`}>
                    <div className="details-text">
                        <span>{projectTitle}, {projectLocation}</span>
                    </div>
                </div>
                <Grid container className="image-block-inner">
                    <Grid item xs={12} sm={6} className="image-block-wrapper">
                        <img src={img1}/>
                        <div className="caption">
                            <p>
                                {caption1}
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} className="image-block-wrapper">
                        <img src={img2}/>
                        <div className="caption">
                            <p>
                                {caption2}
                            </p>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </MaxWidthWrapper>
    </Grid>
)

export default ImageBlock;