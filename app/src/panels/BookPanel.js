import '../App.css';
import React, { useRef } from 'react';
import Box from '@mui/material/Box';
import HTMLFlipBook from 'react-pageflip';
import bookBase from '../images/book-base.png';
import leftPage from '../images/left-page.png';
import rightPage from '../images/right-page.png';

export default function BookPanel() {
    const pages = [leftPage, rightPage, leftPage, rightPage, leftPage, rightPage, leftPage, rightPage]

    const bookWidth = (window.innerWidth / 3);
    const bookHeight = (window.innerHeight * 0.7);

    const Page = React.forwardRef((props, ref) => {
        return (
            <div className='demoPage' ref={ref}>
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

    const book = useRef(null);

    return (
        <div
        style={{
            width: '60vw',
            backgroundColor: 'blue'
        }}
        >
            <HTMLFlipBook
                width={bookWidth} // 750
                height={bookHeight} //695
                size='stretch'
                maxWidth={1925} // 1000
                maxHeight={bookHeight} // 1533
                minWidth={100} // 315
                minHeight={100} // 400
                maxShadowOpacity={0.25}
                mobileScrollSupport={true}
                ref={book}
                style={{
                    backgroundColor: 'red'
                }}
            >
                <Page imgSrc={""}>Hello test</Page>
                <Page imgSrc={""}>Hello test</Page>
                <Page imgSrc={""}>Hello test</Page>
                <Page imgSrc={""}>Hello test</Page>
                <Page imgSrc={""}>Hello test</Page>
                <Page imgSrc={""}>Hello test</Page>
            </HTMLFlipBook>
        </div>
    );
}

{/* <div className="WoodPanel">
<img
    src={bookBase}
    alt="Book Base"
    aria-label="Book Base"
    draggable='false'
    style={{
        width: '60vw',
        height: '80vh'
    }}
/> */}

/* {pages.map((page, i) => (
    <div className="demoPage" key={i}>
        <img
            src={page}
            alt={i}
            style={{
                width: 500,
                height: 600
            }}
        />
    </div>
))} */
