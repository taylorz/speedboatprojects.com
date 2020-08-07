import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import './Nav.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'

import subCTA from '../../assets/graphics/subscribe-cta.svg'

const Nav = ({ onClick }) => (
    <Grid container className="nav-container">
        <MaxWidthWrapper>
            <Grid container className="nav-inner" justify="space-between">
                <Grid item className="nav-items">
                    <ul>
                        <li><NavLink exact onClick={onClick} to="/" className="page-link" activeClassName="page-link-active">Speedboat</NavLink></li>
                        <li><NavLink exact onClick={onClick} to="/studio" className="page-link" activeClassName="page-link-active">Studio</NavLink></li>
                        <li><NavLink exact onClick={onClick} to="/contact" className="page-link" activeClassName="page-link-active">Contact</NavLink></li>
                    </ul>
                </Grid>
                <Grid item className="nav-cta">
                    <a href="#" className="cta-wrapper">
                        <img src={subCTA}/>
                    </a>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
)

export default Nav;