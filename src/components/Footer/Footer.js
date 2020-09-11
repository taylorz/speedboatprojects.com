import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import designServices from '../../constants/design-services'
import constructionServices from '../../constants/construction-services'

const Footer = () => (
    <Grid container className="footer-container">
    <Element name="test1"/>
        <MaxWidthWrapper>
            <Grid container className="footer-description">
                <Grid item xs={12} className="description-text">
                    <p>Speedboat services are based in many years of architectural practice and direct experience of the construction work. We combine the creativity & personalized experience of a boutique design firm with the technical finesse & management acumen of a much larger organization to create uncommon value.</p>
                    <p>We’re an architect-led creative studio that delivers spaces, systems, and buildings of all scales to individuals, brands, and institutions. Our identity as designer, contractor, & trusted advisor is fluid throughout the project life-cycle, resulting in healthier relationships with project partners, higher-quality designs, and meaningful cost-savings for our clients. We serve property owners, real estate professionals, architects, interior designers, fabricators, and general contractors across the United States. Our collaborators are creating arts, residences, and capital projects in California & New York.</p>
                </Grid>
            </Grid>
            <Grid container spacing={10} className="footer-details">
                <Grid item xs={12} sm={6} className="footer-item design-services">
                    <div className="item-header">
                        <div className="header-text">
                            <span>Design Services</span>
                        </div>
                    </div>
                    <ul>
                        {designServices.map((s) => 
                            <li>{s}</li>
                        )}
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} className="footer-item construction-services">
                    <div className="item-header">
                        <div className="header-text">
                            <span>Construction<br/>Management</span>
                        </div>
                    </div>
                    <ul>
                        {constructionServices.map((s) => 
                            <li>{s}</li>
                        )}
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} className="footer-item team">
                    <div className="item-header">
                        <div className="header-text">
                            <span>Team</span>
                        </div>
                    </div>
                    <ul>
                        <li>Chad Karty, Project Principal, (American; b. 1985, Detroit, MI; he/him/his) is an architectural professional delivering unique projects to clients in the arts, entertainment, technology, & finance industries. For many years he labored as a carpenter, fabricating contemporary artworks and restoring Greek Revival townhomes. He earned his B.A. and M.Arch at Columbia University, where he received honors and taught design in the New York– Paris Studio. Before forming Speedboat, Chad practiced at several nationallyrecognized firms, including MADE, M1DTW, Schuchart/Dow, and Radius Track. He is admitted to the ARE in New York and is a licensed general contractor in California. He lives in Silver Lake, Los Angeles.</li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={6} className="footer-item contact">
                    <div className="item-header">
                        <div className="header-text">
                            <span>Contact</span>
                        </div>
                    </div>
                    <ul>
                        <li>General Inquiries <br/>studio@speedboatprojects.com</li>
                        <li>Instagram <br/>@speedboatprojects</li>
                    </ul>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    // </Element>
)

export default Footer;