import { Button } from "@material-ui/core"
import Grid from '@material-ui/core/Grid'
import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-scroll'
import MaxWidthWrapper from '../MaxWidthWrapper/MaxWidthWrapper'
import ReactTypeformEmbeded from '../ReactTypeformEmbeded/ReactTypeformEmbeded'
import './Nav.scss'

const Nav = ({ onClick }) => {

    const typeformEmbed = useRef();

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
                    }}>
                        <Link to="top" spy={true} smooth={true} duration={4000}>  <span className= 'speedboat-span'>SPEEDBOAT</span> </Link>
                    </Button>   
                   
                </Grid>
                <Grid item xs={12} lg={6} className="message">
                    <Button disableRipple style={{
                        paddingLeft: 0,
                        backgroundColor: 'transparent',
                    }}>
                    <Link to="footer" spy={true} smooth={true} duration={4000}>  
                        <span className='message-span'> {shopTextArray[shopIndex]}</span>
                        </Link>
                    </Button>
                </Grid>
            </Grid> 
            <Grid container className="fixed-footer" xs={12} direction="row">
                    <Grid item xs={12} lg={3} className="mail">
                        <span><a href= 'mailto: info@speedboatprojects.com' target="_blank" rel="noopener noreferrer"> info@speedboatprojects.com </a></span>  
                    </Grid>
                    <Grid item xs={12} lg={3} className="instagram"> 
                        <span><a href= 'https://www.instagram.com/speedboatprojects/' target="_blank" rel="noopener noreferrer" > @speedboatprojects</a></span>  
                    </Grid>
                    <Grid item xs={12} lg={2} className="number">       
                        <span><a href="tel:+1 323-450-7551" className='number-a'>1 323-450-7551 </a></span>
                    </Grid>
                    <Grid item xs={12}  lg={3} className="location">
                        <span> <a href= 'https://goo.gl/maps/yhmG89N8N7wqQF2k8' target="_blank" rel="noopener noreferrer" className='location-california'> California </a></span>
                        <span className='and'>& </span>
                        <span><a href= 'https://goo.gl/maps/VzfHjDRb78eqd5vr6' target="_blank" rel="noopener noreferrer" className='location-nyc'> New York</a></span>       
                </Grid>
            </Grid>
        </Grid>
    </MaxWidthWrapper>
    )
};

export default Nav;