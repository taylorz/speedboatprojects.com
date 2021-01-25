import { Button } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import ReactTypeformEmbeded from '../ReactTypeformEmbeded/ReactTypeformEmbeded'
// import { BrowserRouter as Router, Route, Link, NavLink} from 'react-router-dom'
import './Nav.scss'

const Nav = ({ onClick }) => {

    const typeformEmbed = useRef();
    
    const openForm = () => {
        typeformEmbed.current.typeform.open();
    };

    const shopTextArray = ['FURNITURE', 'ARCHITECTURE', 'BOOKS', 'ADUs', 'KITCHENS'];
    const [shopIndex, setShopIndex] = useState(0);
   

    useEffect(() => {
        let timeout;
        const setIndex = (previousVal) => {
            if (previousVal < shopTextArray.length - 1) {
              return previousVal + 1;
            }
            return 0;
        };
        timeout = setTimeout(() => setShopIndex(setIndex(shopIndex)), 900);
        return () => {
            clearTimeout(timeout);
        };
      }, [shopTextArray, shopIndex]);
    
    

    return (
    <MaxWidthWrapper>  
        <ReactTypeformEmbeded
            popup
            autoOpen={false}
            url="https://speedboatprojects.typeform.com/to/CrA1fmIk"
            ref={tf => {
                typeformEmbed.current = tf;
            }}
        />  
        <Grid container className="nav-container">
            <Grid container className="fixed-header" xs={12} direction="row">
                <Grid item xs={12} lg={6} className="speedboat">
                    <Button disableRipple style={{
                        paddingLeft: 0,
                        backgroundColor: 'transparent',
                    }} className= 'speedboat-btn'>
                        <Link to="footer" spy={true} smooth={true} duration={1000}>  <span>SPEEDBOAT</span> </Link>
                    </Button>   
                   
                </Grid>
                <Grid item xs={12} lg={2} className="message">
                    <Button disableRipple onClick={openForm} style={{
                        paddingLeft: 0,
                        backgroundColor: 'transparent',
                    }}>
                    <span className='message-span'>MSG US</span>
                    </Button>                 
                </Grid>
                <Grid item xs={12} lg={4} className="shop">
                    <Button disableRipple style={{
                        backgroundColor: 'transparent',
                    }}>
                    <a className='shop-span' href="https://workshop.speedboatprojects.com/" target="_blank">
                        SHOP {shopTextArray[shopIndex]}
                    </a>
                    </Button>
                </Grid>
            </Grid> 
            <Grid container className="fixed-footer" xs={12} direction="row">
                    <Grid item xs={12} lg={4} className="mail">
                        <a href= 'mailto: info@speedboatprojects.com' target="_blank"> info@speedboatprojects.com </a>
                    </Grid>
                    <Grid item xs={12} lg={2} className="instagram"> 
                        <a href= 'https://www.instagram.com/speedboatprojects/' target="_blank"> instagram </a>
                    </Grid>
                    <Grid item xs={12} lg={2} className="number">       
                        <a href="tel:+1 323-450-7551" >+1 323-450-7551</a>
                    </Grid>
                    <Grid item xs={12}  lg={3} className="location">
                        <a href= 'https://goo.gl/maps/yhmG89N8N7wqQF2k8' target="_blank"> California </a>
                        <span className='and'>& </span>
                        <a href= 'https://goo.gl/maps/VzfHjDRb78eqd5vr6' target="_blank"> New York</a>        
                </Grid>
            </Grid>
        </Grid>
    </MaxWidthWrapper>
    )
};

export default Nav;