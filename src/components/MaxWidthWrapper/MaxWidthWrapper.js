import React from 'react';
import Grid from '@material-ui/core/Grid';
import './MaxWidthWrapper.scss'

const MaxWidthWrapper = ({ children }) => (
    <div className="max-width-wrapper">
        {children}
    </div>
)

export default MaxWidthWrapper;