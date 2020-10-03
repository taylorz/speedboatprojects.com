import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import foote from '../../constants/footerContants'
import designServices from '../../constants/design-services'
import constructionServices from '../../constants/construction-services'
import FOOTER_CONTENT from '../../constants/footerContants'

const Footer = () => {

    const {Description, Divisions, People, Friends} = FOOTER_CONTENT;

    return (
        <Grid container className="footer-container">
        <Element name="test1"/>
        <MaxWidthWrapper>
            <Grid container className="footer-description">
                <Grid item xs={12} className="description-text">
                    <p>{Description.para1}</p>
                    <p>{Description.para2}</p>
                </Grid>
            </Grid>
            <Grid container spacing={10} className="footer-details">   
                        {Divisions.map(({ title, text }) => (
                        <Grid item xs={4} className="footer-item design-services">
                        <div className = "footer-item design-services-title">
                            <b>{title}</b>
                        </div>
                        <td key={`tablevalue-${text}`}>{text}</td>
                        </Grid>
                        ))}
                    <div className = 'footer-item people'>
                        <div className = 'footer-item people-title'>
                            <b>{People.title}</b>
                        </div>
                        <Grid item xs={6} className="footer-item people-list">
                            <div className = "footer-item ">
                                <p> {People.pers1}</p>
                                <p> {People.pers2}</p>
                            </div>
                        </Grid>
                    </div>
                <Grid item xs={4} className="footer-item contact">
                    <div className="footer-item friends">
                        <div className="header-text">
                            <b>{Friends.title}</b>

                        </div>
                    </div>
                </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Footer;