import React, { useRef, useState, useEffect} from 'react'
// import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import './Nav.scss'
import Grid from '@material-ui/core/Grid'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import ReactTypeformEmbeded from '../ReactTypeformEmbeded/ReactTypeformEmbeded'
import { Button } from "@material-ui/core";
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Nav = ({ onClick }) => {

    const typeformEmbed = useRef();
    
    const openForm = () => {
        typeformEmbed.current.typeform.open();
    };

    const shopTextArray = ['FURNITURE', 'ARCHITECTURE', 'BOOKS', 'AUDs', 'KITCHENS'];
    const [shopIndex, setShopIndex] = useState(0);

   

    useEffect(() => {
        let timeout;
        const setIndex = (previousVal) => {
            if (previousVal < shopTextArray.length - 1) {
              return previousVal + 1;
            }
            return 0;
        };
        timeout = setTimeout(() => setShopIndex(setIndex(shopIndex)), 500);
        return () => {
            clearTimeout(timeout);
        };
      }, [shopTextArray, shopIndex]);
    
    

    return (
    <Grid container className="nav-container">
        <MaxWidthWrapper>
            <Grid container className="nav-inner">
                <Grid item className="nav-items" xs={4}>
                    <ul>
                        <li><Link className="page-link" to="test1" spy={true} smooth={true} duration={1000}>  <span className="changeColor">SPEEDBOAT </span> </Link></li>
                    </ul>
                </Grid>
                <Grid item className="nav-cta" xs={8}>
                    <Grid container spacing={2} justify="flex-end">
                        <Grid item>
                                <ReactTypeformEmbeded
                                popup
                                autoOpen={false}
                                url="https://speedboatprojects.typeform.com/to/CrA1fmIk"
                                ref={tf => {
                                    typeformEmbed.current = tf;
                                }}
                                />
                                <Button disableRipple onClick={openForm} className="message-wrapper" >  
                                    MSG US
                                </Button> 
                                
                        </Grid>
                        <Grid item>
                            <Button disableRipple className="shop" >
                            <a href="https://workshop.speedboatprojects.com" target="_blank">
                                SHOP  {shopTextArray[shopIndex]}
                            </a>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>  
            <Grid container className="footer" xs={12}>
                    <Grid item xs={4}>
                        <a href= 'mailto: studio@speedboatprojects.com' target="_blank"> studio@speedboatprojects.com </a>
                    </Grid>
                    <Grid item xs={2}>
                        <a href= 'https://www.instagram.com/speedboatprojects/' target="_blank"> instagram </a>
                    </Grid>
                    <Grid item xs={3}>
                        +1 323-450-7551
                    </Grid>
                    <Grid item xs={3}>
                    <a href= 'https://goo.gl/maps/yhmG89N8N7wqQF2k8' target="_blank"> Los Angeles </a>
                     & 
                    <a href= 'https://goo.gl/maps/VzfHjDRb78eqd5vr6' target="_blank"> New York</a>
                    </Grid>
            </Grid>
        </MaxWidthWrapper>
    </Grid>
    )
};

export default Nav;


// style={{ backgroundColor: 'transparent' }}