import Grid from '@material-ui/core/Grid';
import React from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import './ImageBlock.scss';

const ImageBlock = ({ img1}) => (
    <Grid container className="image-block-container">
        <MaxWidthWrapper>
            <div className="image-block-outer">
                <Grid container className="image-block-inner">
                    <Grid item xs={12}  className="image-block-wrapper">
                        <img src={img1} loading="lazy" alt=""/>
                    </Grid>
                </Grid>
            </div>
        </MaxWidthWrapper>
    </Grid>
)

export default ImageBlock;