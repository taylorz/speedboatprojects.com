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
                    <div className = 'description-text speedboat'>

                        <p>{Description.para1}</p>
                    </div>
                    <p><b>{Description.para11Title}</b>{Description.para11} </p>
                    <p><b>{Description.para12Title}</b>{Description.para12}</p>
                    <p>{Description.para2}</p>
                    <p><b>{Description.para4Title}</b>{Description.para4}</p>
                </Grid>
                <Grid item xs={8} className='description-list'>
                    <ol>
                    {Description.platforms.map(({text }) => (
                        <li> {text} </li> 
                    ))}
                    </ol>
                </Grid>  
            </Grid>
            <Grid container spacing={10} className="footer-details">   
                        {Divisions.map(({ title, text }) => (
                        <Grid item xs={4} className="footer-item design-services">
                            <td key={`tablevalue-${text}`}> <b>{title}</b>{text}</td>
                        </Grid>
                        ))}
                 <Grid item xs={12} className="footer-item people">
                        <div className = 'footer-item people-title'>
                            <b>{People.title}</b>
                        </div>
                        <div className = 'footer-item people-text'>
                            <p><b>{People.names}</b>{People.text}</p>
                        </div>
                        <Grid container spacing={10}>
                            {People.peoples.map(({name, text }) => (
                                <Grid item xs={6} className="footer-item people-list" wrap='nowrap'>
                                    <td key={`tablevalue-${text}`}><b>{name}</b>{text}</td>
                                </Grid>
                            ))}
                        </Grid>
                 </Grid>
                 {/* <Grid item xs={12} className="footer-item friends">
                        <div className="header-text">
                            <b>{Friends.title}</b>
                        </div>
                        <Grid container spacing={10} className="footer-item friends-list">
                            {Friends.lists.map(({list}) => (
                            <Grid item xs={4} className="footer-item friends-item" wrap='nowrap'>
                                {nameList(list)}
                            </Grid>
                            ))}
                        </Grid>
                </Grid> */}
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Footer;