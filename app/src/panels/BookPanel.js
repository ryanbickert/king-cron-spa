import '../App.css';
import React, { useRef } from 'react';
import Box from '@mui/material/Box';
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
            <Box sx={{ width: '100vw', height: '5vh', maxWidth: '100%' }} />
            <img
                src={bookBase}
                alt='Book Base'
                aria-label='Book Base'
                draggable='false'
                style={{
                    width: '70vw',
                    height: '80vh'
                }}
            />
            <Box sx={{ width: '50vw', height: '50vh', maxWidth: '100%' }}>
                <HTMLFlipBook
                    width={520}
                    height={650}
                    size='stretch'
                    maxShadowOpacity={0.25}
                    mobileScrollSupport={true}
                >
                    <LeftPage imgSrc={""}>Hello test</LeftPage>
                    <RightPage imgSrc={""}>Hello test</RightPage>
                    <LeftPage imgSrc={""}>Hello test</LeftPage>
                    <RightPage imgSrc={""}>Hello test</RightPage>
                    <LeftPage imgSrc={""}>Hello test</LeftPage>
                    <RightPage imgSrc={""}>Hello test</RightPage>
                </HTMLFlipBook>
            </Box>
        </div>
    );
}
