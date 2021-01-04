import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FOOTER_CONTENT from '../../constants/footerContants'

const Footer = () => {

    const {Description, Divisions, People} = FOOTER_CONTENT;

    const SPACING = 3;

    // function nameList(names) {
    //     const listItems = names.map((name) =>
    //       <li>
    //         {name}
    //       </li>
    //     );
    //     return (
    //       <ul>{listItems}</ul>
    //     );
    //   }

    return (
        <MaxWidthWrapper>
        <Grid container className="footer-container" justify-content='space-evenly' spacing = {12}>
            <Grid container className="footer-company" justify-content='space-evenly' spacing={SPACING} >
                <Grid item xs={12}>
                    <div className = 'footer-company title'>
                        COMPANY
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className = 'footer-company speedboat'>
                        <p>{Description.para1}</p>
                    </div>
                </Grid>
                <Grid item xs={12} className="footer-company items">
                    <Grid container justify-content='space-evenly'spacing={SPACING}>
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
                <Grid item xs={12}>
                    <div className='services title'>
                        <p> SERVICES</p>
                    </div>
                </Grid> 
                <Grid item xs={12}>
                    <div className='services text'>
                        <p>{Description.para4}</p>
                    </div>
                </Grid> 
                <Grid item xs={12}>
                    <Grid container justify-content='space-evenly' spacing={SPACING} >   
                        {Divisions.map(({text }) => (
                            <Grid item xs={12} lg={4} className="services items">
                                <p> {text} </p>
                            </Grid>
                        ))} 
                     </Grid>
                </Grid>
            </Grid>
            <Grid container className="footer-partnership" justify-content='space-evenly'spacing={SPACING} >   
                <Grid item xs={12}>
                    <div className = 'footer-partnership title'>
                        <p>{People.title}</p>
                    </div>
                <Grid item xs={12}>
                    <div className = 'footer-partnership text'>
                        <p>{People.text}</p>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justify-content='space-evenly'spacing={SPACING} >
                        {People.peoples.map(({text }) => (
                            <Grid item xs={12} lg={8} className = 'footer-partnership people'>
                                <p> {text}</p>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
                <Grid item xs={12} className='footer-partnership incorporated'>
                    © SPEEDBOAT INC., 2021. All rights reserved.
                </Grid>
            </Grid>
        </Grid>
    </Grid>
    </MaxWidthWrapper>
    )
};

export default Footer;