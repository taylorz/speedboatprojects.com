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
import FOOTER_CONTENT from '../../constants/footerContants'
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = ({ onClick }) => {

    const typeformEmbed = useRef();

    const { Social} = FOOTER_CONTENT;

    
    
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
                            <a href="workshop.speedboatprojects.com" target="_blank">
                                SHOP
                            </a>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={10} className="footer-item">
                        <Grid item xs={6} className="footer-item contact">
                        {Social.contact.map(({item}) => (
                            <Grid item xs={6} className="footer-item design-services">
                                <a href= {item.link} target="_blank"> {item.name} </a>
                            </Grid>
                            ))}
                    </Grid>
                    <Grid item xs={6} className="footer-item location">
                        {Social.place.map(({item}) => (
                            <Grid item xs={6} className="footer-item design-services">
                                <a href= {item.link} target="_blank"> {item.name} </a>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Nav;


// style={{ backgroundColor: 'transparent' }}