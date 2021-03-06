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
        <Grid container className="nav-container">
            <Grid container className="header" xs={12} direction="row">
                <Grid item xs={12} lg={6}>
                    <Button disableRipple className="header speedboat"> 
                        <Link to="test1" spy={true} smooth={true} duration={1000}>  <span>SPEEDBOAT</span> </Link>
                    </Button>   
                </Grid>
                <Grid item xs={12} lg={2}>
                    <ReactTypeformEmbeded
                        popup
                        autoOpen={false}
                        url="https://speedboatprojects.typeform.com/to/CrA1fmIk"
                        ref={tf => {
                            typeformEmbed.current = tf;
                        }}
                    />
                    <Button disableRipple onClick={openForm} className="header message" > <span>MSG US</span></Button>                 
                </Grid>
                <Grid item xs={12} lg={3}>
                    <Button disableRipple className="header shop" >
                    <a href="https://workshop.speedboatprojects.com/" target="_blank">
                        <span>SHOP {shopTextArray[shopIndex]}</span>
                    </a>
                    </Button>
                </Grid>
            </Grid> 
            <Grid container className="footer" xs={12} direction="row">
                    <Grid item xs={12} lg={4}>
                        <Button disableRipple className='footer item'>
                            <a href= 'mailto: info@speedboatprojects.com' target="_blank"> info@speedboatprojects.com </a>
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <Button disableRipple className='footer item'>
                            <a href= 'https://www.instagram.com/speedboatprojects/' className='instagram' rel="noopener noreferrer" target="_blank"> instagram </a>
                        </Button>
                    </Grid>
                    <Grid item xs={12} lg={2}>
                        <Button disableRipple className = 'footer item'> 
                            <a href="tel:+1 323-450-7551" className='phoneNumber'>+1 323-450-7551</a>
                        </Button>
                    </Grid>
                    <Grid item xs={12}  lg={3}>
                        <Button disableRipple className='footer item'>
                            <a href= 'https://goo.gl/maps/yhmG89N8N7wqQF2k8'rel="noopener noreferrer" target="_blank" > California </a>
                            <span className='and'>& </span>
                            <a href= 'https://goo.gl/maps/VzfHjDRb78eqd5vr6' rel="noopener noreferrer" target="_blank" > New York</a>
                        </Button>                
                    </Grid>
            </Grid>
        </Grid>
    </MaxWidthWrapper>
    )
};

export default Nav;