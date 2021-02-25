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
            <Grid container className="footer-company" justify-content='center' spacing={SPACING}>
                <Grid item xs={3}>
                    <div className = 'title'>
                        <p>COMPANY</p>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div>
                        <p>{Description.para1}</p>
                    </div>
                    <Grid container justify-content='space-between'spacing={SPACING} className='items'>
                        <Grid item xs={12}  lg={6}> 
                            <p className='description-1'>{Description.para2} </p>
                        </Grid>
                        <Grid item xs={12}  lg={6}> 
                            <p className='description-2'>{Description.para3}</p>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container className="footer-services" justify-content='space-evenly'spacing={SPACING} >
                <Grid item xs={3}>
                    <div className = 'title'>
                        <p> SERVICES </p>
                    </div>
                </Grid>
                <Grid item xs={9}>
                    <div className='text'>
                        <p>{Description.para4}</p>
                    </div>
                    <Grid container justify-content='space-between' spacing={4} >   
                        {Divisions.map(({text }) => (
                            <Grid item xs={12} lg={4} className="items">
                                <p className='item'> {text} </p>
                            </Grid>
                        ))} 
                     </Grid> 
                </Grid>
            </Grid>
            <Grid container className="footer-partnership" justify-content='space-evenly'spacing={SPACING} > 
                <Grid item xs={3}>
                    <div className = 'title'>
                        <p>PARTNERSHIP</p>
                    </div>
                </Grid>
                <Grid item xs={9}>
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