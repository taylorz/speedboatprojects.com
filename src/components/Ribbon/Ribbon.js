import React, { component } from 'react'
import './Ribbon.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import Ticker from 'react-ticker'

const Ribbon = ({kitchens, customhomes, multifamily, publicurban}) => (
    <Grid
        container 
        alignItems="center"
        className={`
        ribbon-container 
        ${multifamily && "multi-family"}
        ${customhomes && "custom-homes"}
        ${kitchens && "kitchens"}
        ${publicurban && "public-urban"}
    `}>
        <MaxWidthWrapper>
            <Ticker
                speed={10}
                chain
            >
                {({ index }) => (
                    <div className="wrapper-slide">
                        <span className="slide-main-title">
                            {multifamily ?
                                "MULTI-FAMILY, CORE & SHELL, FACADES"
                            : customhomes ?
                                "CUSTOM HOMES AND ADDITIONS" 
                            : kitchens ? 
                                "HANDCRAFTED KITCHENS"
                            : publicurban &&
                                "PUBLIC & URBAN SPACES"}
                        </span>
                        <span className="slide-secondary-title">
                            {multifamily ?
                                "LA, CA."
                            : customhomes ?
                                "ON BUDGET ON TIME" 
                            : kitchens ? 
                                "AVAILABLE NOW"
                            : publicurban &&
                                "PRODUCT OF USA"}
                        </span>
                    </div>
                )}
            </Ticker>
        </MaxWidthWrapper>
    </Grid>
)

export default Ribbon;