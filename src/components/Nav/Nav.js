import React, { useRef } from 'react'
// import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import './Nav.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import ReactTypeformEmbeded from '../ReactTypeformEmbeded/ReactTypeformEmbeded'

import shopButton from '../../assets/graphics/SHOP_button.gif'
import speedBoatBtn from '../../assets/graphics/SPEEDBOAT_button.gif'
import msgBtn from '../../assets/graphics/MSG_button.png'
import { Button } from "@material-ui/core";
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = ({ onClick }) => {

    const typeformEmbed = useRef();
    
    const openForm = () => {
        typeformEmbed.current.typeform.open();
    };

    return (
    <Grid container className="nav-container">
        <MaxWidthWrapper>
            <Grid container className="nav-inner" justify="space-between">
                <Grid item className="nav-items" xs={6}>
                    <ul>
                        <li><Link className="page-link" to="test1" spy={true} smooth={true} duration={1000}> <img src={speedBoatBtn} width="260" height='auto'/> </Link></li>
                    </ul>
                </Grid>
                <Grid item className="nav-cta" xs={6}>
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item>
                                <ReactTypeformEmbeded
                                popup
                                autoOpen={false}
                                url="https://speedboatprojects.typeform.com/to/CrA1fmIk"
                                hideHeaders
                                hideFooter
                                buttonText="SHOP"
                                style={{ top: 100 }}
                                ref={tf => {
                                    typeformEmbed.current = tf;
                                }}
                                />
                                <Button disableRipple onClick={openForm} className="message-wrapper" style={{ backgroundColor: 'transparent' }}> 
                                    <img src={msgBtn}/>  
                                </Button> 
                                
                        </Grid>
                        <Grid item>
                            <a href="https://speedboatprojects.bigcartel.com" target="_blank" className="cta-wrapper">
                                <img src={shopButton}/>
                            </a>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Nav;