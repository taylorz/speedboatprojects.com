import Grid from '@material-ui/core/Grid';
import React from 'react';
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FOOTER_CONTENT from '../../constants/footerContants';
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper';
import './Footer.scss';

const Footer = () => {

    const {Description, Divisions, People} = FOOTER_CONTENT;

    const SPACING = 3;

    return (
        <MaxWidthWrapper>
        <div className="footer-container">
            <Grid container className="footer-company" justify-content='flex-end' spacing={SPACING}>
                <Grid item xs={3}>
                    <div className = 'title'>
                        COMPANY
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className = 'speedboat'>
                        <p>{Description.para1}</p>
                    </div>
                    <Grid container justify-content='space-evenly'spacing={SPACING} className='items'>
                        <Grid item xs={12}  lg={6}> 
                            <p>{Description.para2} </p>
                        </Grid>
                        <Grid item xs={12}  lg={6}> 
                            <p>{Description.para3}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="footer-services" justify-content='space-evenly'spacing={SPACING} >
                <Grid item xs={3}>
                    <span>              </span>
                </Grid>
                <Grid item xs={9}>
                <div className='title'>
                        <p> SERVICES</p>
                    </div>
                    <div className='text'>
                        <p>{Description.para4}</p>
                    </div>
                    <Grid container justify-content='space-evenly' spacing={SPACING} >   
                        {Divisions.map(({text }) => (
                            <Grid item xs={12} lg={4} className="items">
                                <p> {text} </p>
                            </Grid>
                        ))} 
                     </Grid> 
                </Grid>
            </Grid>
            <Grid container className="footer-partnership" justify-content='space-evenly'spacing={SPACING} > 
                <Grid item xs={3}>
                    <span>              </span>
                </Grid>
                <Grid item xs={9}>
                    <div className = 'title'>
                        <p>{People.title}</p>
                    </div>
                    <div className = 'text'>
                        <p>{People.text}</p>
                    </div>
                    <Grid container justify-content='space-evenly' spacing={0} >
                        {People.peoples.map(({text }) => (
                            <Grid item xs={12} lg={8} className = 'people'>
                                <p> {text}</p>
                            </Grid>
                        ))}
                    </Grid>
                <Grid item xs={12} className='incorporated'>
                    © SPEEDBOAT INC., 2021. All rights reserved.
                </Grid>
            </Grid>
        </Grid>
    </div>
    </MaxWidthWrapper>
    )
};

export default Footer;