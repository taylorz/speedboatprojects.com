import React from 'react'
// import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import './Nav.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import subCTA from '../../assets/graphics/subscribe-cta.svg'

const Nav = ({ onClick }) => (
    <Grid container className="nav-container">
        <MaxWidthWrapper>
            <Grid container className="nav-inner" justify="space-between">
                <Grid item className="nav-items" xs={6}>
                    <ul>
                        {/* <li><NavLink exact onClick={onClick} to="/" className="page-link" activeClassName="page-link-active">Speedboat</NavLink></li> */}
                        <li><Link className="page-link" to="test1" spy={true} smooth={true} duration={1000}>Speedboat</Link></li>
                    </ul>
                </Grid>
                <Grid item className="nav-cta" xs={6}>
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item>
                            <a href="#" className="cta-wrapper">
                                <img src={subCTA}/>
                            </a>
                        </Grid>
                        <Grid item>
                            <a href="#" className="cta-wrapper">
                                <img src={subCTA}/>
                            </a>
                        </Grid>
                    </Grid>
                    
                </Grid>
                
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default Nav;