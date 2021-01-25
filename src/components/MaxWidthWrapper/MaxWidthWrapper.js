import React from 'react';
import './MaxWidthWrapper.scss'

const MaxWidthWrapper = ({ children }) => (
    <div className="max-width-wrapper">
        {children}
    </div>
)

export default MaxWidthWrapper;