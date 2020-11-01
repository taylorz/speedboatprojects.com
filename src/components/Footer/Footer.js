import React from 'react'
import './Footer.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import FOOTER_CONTENT from '../../constants/footerContants'

const Footer = () => {

    const {Description, Divisions, People, Friends} = FOOTER_CONTENT;

    function nameList(names) {
        const listItems = names.map((name) =>
          <li>
            {name}
          </li>
        );
        return (
          <ul>{listItems}</ul>
        );
      }

    return (
        <Grid container className="footer-container">
        <MaxWidthWrapper>
            <Grid container className="footer-description">
                <Grid item xs={12} className="description-text">
                <div className = 'description-text title'>
                        COMPAGNY
                    </div>
                    <div className = 'description-text speedboat'>
                        <p>{Description.para1}</p>
                    </div>
                    <Grid container spacing={10} className="description-text items">
                        <Grid item xs={6}> 
                            <p>{Description.para11} </p>
                        </Grid>
                        <Grid item xs={6}> 
                            <p>{Description.para12}</p>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} className='description-list'>
                    <p className='description-list title'> SERVICES</p>
                    <p>{Description.para4Title}{Description.para4}</p>
                </Grid>  
            </Grid>
            <Grid container spacing={10} className="footer-details">   
                        {Divisions.map(({text }) => (
                        <Grid item xs={4} className="footer-item design-services">
                            <td key={`tablevalue-${text}`}>{text}</td>
                        </Grid>
                        ))}
                 <Grid item xs={12} className="footer-item people">
                        <div className = 'footer-item people-title'>
                            <p>{People.title}</p>
                        </div>
                        <div className = 'footer-item people-text'>
                            <p>{People.text}</p>
                        </div>
                        <Grid container spacing={10}>
                            {People.peoples.map(({text }) => (
                                <Grid item xs={12} className="footer-item people-list" wrap='nowrap'>
                                    <td key={`tablevalue-${text}`}>{text}</td>
                                </Grid>
                            ))}
                        </Grid>
                 </Grid>
                 <Grid item xs={12}>
                    © SPEEDBOAT INC., 2021. All rights reserved.
                 </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Footer;