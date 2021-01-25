import React from 'react';
import Grid from '@material-ui/core/Grid'
import './ImageBlock.scss'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const ImageBlock = ({ img1}) => (
    <Grid container className="image-block-container">
        <MaxWidthWrapper>
            <div className="image-block-outer">
                <Grid container className="image-block-inner">
                    <Grid item xs={12}  className="image-block-wrapper">
                        <img src={img1}/>
                    </Grid>
                </Grid>
            </div>
        </MaxWidthWrapper>
    </Grid>
)

export default ImageBlock;