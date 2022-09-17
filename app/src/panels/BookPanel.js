import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HTMLFlipBook from 'react-pageflip';
import bookBase from '../images/book/book-base.png';
import leftPage from '../images/book/left-page.png';
import rightPage from '../images/book/right-page.png';
import pageOne from '../images/book/page-one.gif';
import pageTwo from '../images/book/page-two.gif';
import pageThree from '../images/book/page-three.gif';
import pageFour from '../images/book/page-four.gif';
import pageFive from '../images/book/page-five.gif';
import pageSix from '../images/book/page-six.png';
import CustomButtons from '../components/CustomButtons';

export default function BookPanel() {
    const pages = [leftPage, rightPage, leftPage, rightPage, leftPage, rightPage, leftPage, rightPage]

    const bookWidth = (window.innerWidth);
    const bookHeight = (window.innerHeight);

    const LeftPage = React.forwardRef((props, ref) => {
        return (
            <div className='leftPage' ref={ref}>
                <Box sx={{ width: '100vw', height: '0.5vh', maxWidth: '100%' }} />
                <img
                    src={props.imgSrc}
                    alt=""
                    style={{
                        objectFit: 'scale-down',
                        maxWidth: '100%',
                        borderRadius: 10
                    }}
                />
            </div>
        );
    })

    const RightPage = React.forwardRef((props, ref) => {
        return (
            <div className='rightPage' ref={ref}>
                <Box sx={{ width: '100vw', height: '0.5vh', maxWidth: '100%' }} />
                <img
                    src={props.imgSrc}
                    alt=""
                    style={{
                        objectFit: 'scale-down',
                        maxWidth: '100%',
                        borderRadius: 10
                    }}
                />
                <Box sx={{ height: '5vh', width: '12vw', position: 'relative', top: '-52.5%', left: "28%" }}>
                    <CustomButtons />
                </Box>
            </div>
        );
    })

    return (
        <div className="WoodPanel">
            <Box sx={{ width: '100vw', height: '10vh', maxWidth: '100%' }} />
            <Grid container>
                <Grid item xs={2.65} />
                <Grid item>
                    <Box
                        sx={{
                            width: '55vw',
                            height: '55vh',
                            maxWidth: '100%'
                        }}
                    >
                        <HTMLFlipBook
                            width={520}
                            height={650}
                            size='stretch'
                            maxShadowOpacity={0.5}
                            mobileScrollSupport={true}
                            style={{
                                zIndex: 1
                            }}
                        >
                            <LeftPage imgSrc={pageOne}></LeftPage>
                            <RightPage imgSrc={pageTwo}></RightPage>
                            <LeftPage imgSrc={pageThree}></LeftPage>
                            <RightPage imgSrc={pageFour}></RightPage>
                            <LeftPage imgSrc={pageFive}></LeftPage>
                            <RightPage imgSrc={pageSix}></RightPage>
                        </HTMLFlipBook>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: '100vw', height: '60vh', maxWidth: '100%' }}>
                <img
                    src={bookBase}
                    alt='Book Base'
                    aria-label='Book Base'
                    draggable='false'
                    style={{
                        width: '57vw',
                        position: 'relative',
                        top: '-101%'
                    }}
                />
            </Box>
            <Box sx={{ width: '100vw', height: '10vh', maxWidth: '100%' }} />
        </div>
    );
}
