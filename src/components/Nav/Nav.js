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

    const nameList = (names) => {
        const listItems = names.map((name) =>
          <li>
            {name}
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
    };

    return (
    <Grid container className="nav-container">
        <MaxWidthWrapper>
            <Grid container className="nav-inner">
                <Grid item className="nav-items" xs={6}>
                    <ul>
                        <li><Link className="page-link" to="test1" spy={true} smooth={true} duration={1000}> SPEEDBOAT </Link></li>
                    </ul>
                </Grid>
                <Grid item className="nav-cta" xs={6}>
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item>
                                <ReactTypeformEmbeded
                                popup
                                autoOpen={false}
                                url="https://speedboatprojects.typeform.com/to/CrA1fmIk"
                                hideHeader
                                hideFooter
                                ref={tf => {
                                    typeformEmbed.current = tf;
                                }}
                                />
                                <Button disableRipple onClick={openForm} className="message-wrapper" >  
                                    MSG US
                                </Button> 
                                
                        </Grid>
                        <Grid item>
                            <Button disableRipple className="message-wrapper" >
                            <a href="https://workshop.speedboatprojects.com" target="_blank">
                                SHOP ARCHITECTURE
                            </a>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>  
            <Grid container className="footer">
                <Grid container className='left-footer' xs={6}>
                    <Grid container className="left-footer contact" spacing={10}>
                        <Grid item xs={4}>
                            <a href= 'https://www.instagram.com/speedboatprojects/' target="_blank"> instagram </a>
                        </Grid>
                        <Grid item xs={4}>
                            323-450-7551
                        </Grid>
                    </Grid>
                    <Grid item className='left-footer mail' xs={6}>
                        <a href= 'mailto: studio@speedboatprojects.com' target="_blank"> studio@speedboatprojects.com </a>
                    </Grid>
                </Grid>
                <Grid container className='right-footer' xs={6}>
                    <Grid container spacing={10} className="right-footer location">
                        <Grid item xs={6} className="location-LA">
                            <a href= 'https://goo.gl/maps/yhmG89N8N7wqQF2k8' target="_blank"> Los Angeles, CA </a>
                        </Grid>
                        <Grid item xs={6} className="location-NY">
                            <a href= 'https://goo.gl/maps/VzfHjDRb78eqd5vr6' target="_blank"> New York, NY</a>
                        </Grid>    
                    </Grid>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Nav;


// style={{ backgroundColor: 'transparent' }}