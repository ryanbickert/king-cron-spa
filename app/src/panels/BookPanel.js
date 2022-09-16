import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import HTMLFlipBook from 'react-pageflip';
import bookBase from '../images/book-base.png';
import leftPage from '../images/left-page.png';
import rightPage from '../images/right-page.png';

export default function BookPanel() {
    const pages = [leftPage, rightPage, leftPage, rightPage, leftPage, rightPage, leftPage, rightPage]

    const bookWidth = (window.innerWidth);
    const bookHeight = (window.innerHeight);

    const LeftPage = React.forwardRef((props, ref) => {
        return (
            <div className='leftPage' ref={ref}>
                <img
                    src={props.imgSrc}
                    alt=""
                    style={{
                        objectFit: 'fill',
                        maxWidth: '100%'
                    }}
                />
                <p>{props.children}</p>
            </div>
        );
    })

    const RightPage = React.forwardRef((props, ref) => {
        return (
            <div className='rightPage' ref={ref}>
                <img
                    src={props.imgSrc}
                    alt=""
                    style={{
                        objectFit: 'fill',
                        maxWidth: '100%'
                    }}
                />
                <p>{props.children}</p>
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
                            maxWidth: '100%',
                            backgroundColor: 'red'
                        }}
                    >
                        <HTMLFlipBook
                            width={520}
                            height={650}
                            size='stretch'
                            maxShadowOpacity={0.25}
                            mobileScrollSupport={true}
                            style={{
                                zIndex: 1
                            }}
                        >
                            <LeftPage imgSrc={""}>Hello test</LeftPage>
                            <RightPage imgSrc={""}>Hello test</RightPage>
                            <LeftPage imgSrc={""}>Hello test</LeftPage>
                            <RightPage imgSrc={""}>Hello test</RightPage>
                            <LeftPage imgSrc={""}>Hello test</LeftPage>
                            <RightPage imgSrc={""}>Hello test</RightPage>
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
                    height: '80vh',
                    position: 'relative',
                    top: '-101%'
                }}
            />
            </Box>
            <Box sx={{ width: '100vw', height: '10vh', maxWidth: '100%' }} />
        </div>
    );
}
