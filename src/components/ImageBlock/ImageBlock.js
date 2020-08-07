import React from 'react';
import Grid from '@material-ui/core/Grid'
import './ImageBlock.scss'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

const ImageBlock = ({ img }) => (
    <Grid container className="image-block-container">
        <MaxWidthWrapper>
            <Grid container className="image-block-inner">
                <Grid item xs={12} className="image-block-wrapper">
                    <img src={img}/>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default ImageBlock;