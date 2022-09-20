import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HTMLFlipBook from 'react-pageflip';
import bookBase from '../media/book/book-base.png';
import pageOne from '../media/book/page-one.gif';
import pageTwo from '../media/book/page-two.gif';
import pageThree from '../media/book/page-three.gif';
import pageFour from '../media/book/page-four.gif';
import pageFive from '../media/book/page-five.gif';
import pageSix from '../media/book/page-six.png';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import CustomButtons from '../components/CustomButtons';

export default function BookPanel() {
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
        <div style={{ position: 'relative' }}>
            <div className="WoodPanel">
                <CustomBorderB />
                <Box sx={{ width: '100vw', height: '4vh', maxWidth: '100%' }} />
                <div
                    style={{
                        height: '38vw'
                    }}
                >
                    <Grid container>
                        <Grid item xs={2.75} />
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
                                        zIndex: 2
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
                </div>
            </div>
            <img
                src={bookBase}
                alt='Book Base'
                aria-label='Book Base'
                draggable='false'
                style={{
                    width: '57vw',
                    maxWidth: '57vw',
                    position: 'absolute',
                    top: '7vh',
                    left: '22%',
                    zIndex: 1
                }}
            />
            <Box sx={{ width: '100vw', height: '4vw', maxWidth: '100%' }} />
            <CustomBorder />
        </div>
    );
}
