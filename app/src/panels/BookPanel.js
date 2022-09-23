import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HTMLFlipBook from 'react-pageflip';
import bookBase from '../media/book/book-base.png';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import CustomButtons from '../components/CustomButtons';
import pageSix from '../media/book/page-six.png';

export default function BookPanel() {
    const LeftPage = React.forwardRef((props, ref) => {
        return (
            <div className={props.myClassName} ref={ref}>
                <video
                    src={props.src}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    style={{
                        objectFit: 'scale-down',
                        maxWidth: '100%',
                        height: '99%',
                        borderRadius: 10
                    }}
                />
            </div>
        );
    })

    const RightPage = React.forwardRef((props, ref) => {
        return (
            <div className={props.myClassName} ref={ref}>
                <video
                    src={props.src}
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    style={{
                        objectFit: 'scale-down',
                        maxWidth: '100%',
                        height: '99%',
                        borderRadius: 10
                    }}
                />
                <Box sx={{ height: '5vh', width: '12vw', position: 'absolute', top: '55%', left: "28%" }}>
                    <CustomButtons />
                </Box>
            </div>
        );
    })

    const PageSix = React.forwardRef((props, ref) => {
        return (
            <div className={props.myClassName} ref={ref}>
                <img
                    src={props.src}
                    alt=""
                    style={{
                        objectFit: 'fill',
                        maxWidth: '100%',
                        height: '99%',
                        borderRadius: 10
                    }}
                />
                <Box sx={{ height: '5vh', width: '12vw', position: 'absolute', top: '55%', left: "28%" }}>
                    <CustomButtons />
                </Box>
            </div>
        );
    })

    return (
        <div style={{ position: 'relative' }}>
            <div className="WoodPanel">
                <CustomBorderB />
                <Box sx={{ width: '100vw', height: '8vh', maxWidth: '100%' }} />
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
                                    minWidth={50}
                                    minHeight={50}
                                    size='stretch'
                                    maxShadowOpacity={0.5}
                                    mobileScrollSupport={true}
                                    style={{
                                        zIndex: 2
                                    }}
                                >
                                    <LeftPage myClassName='leftPage' src={'videos/page-one.mp4'}></LeftPage>
                                    <RightPage myClassName='rightPage' src={'videos/page-two.mp4'}></RightPage>
                                    <LeftPage myClassName='leftPage' src={'videos/page-three.mp4'}></LeftPage>
                                    <RightPage myClassName='rightPage' src={'videos/page-four.mp4'}></RightPage>
                                    <LeftPage myClassName='leftPage' src={'videos/page-five.mp4'}></LeftPage>
                                    <PageSix myClassName='rightPage' src={pageSix}></PageSix>
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
                    height: '38vw',
                    maxHeight: '38vw',
                    maxWidth: '57vw',
                    position: 'absolute',
                    top: 'calc(11vh - 3%)',
                    left: '22%',
                    zIndex: 1
                }}
            />
            <div className='WoodPanel'>
                <Box sx={{ width: '100vw', height: '2.5vh', maxWidth: '100%' }} />
                <CustomBorder />
            </div>
        </div>
    );
}
