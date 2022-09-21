import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import HTMLFlipBook from 'react-pageflip';
import bookBase from '../media/book/book-base.png';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import CustomButtons from '../components/CustomButtons';

export default function BookPanel() {
    const CharacterPage = React.forwardRef((props, ref) => {
        return (
            <div className={props.myClassName} ref={ref} />
        );
    })

    const NotesPage = React.forwardRef((props, ref) => {
        return (
            <div className={props.myClassName} ref={ref}>
                <Box sx={{ width: '100vw', height: '3vmin', maxWidth: '100%' }} />
                <img
                    src={props.imgSrc}
                    alt=""
                    style={{
                        objectFit: 'fill',
                        maxWidth: '100%',
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
                                    <CharacterPage myClassName='pageOne'></CharacterPage>
                                    <NotesPage myClassName='pageTwo' imgSrc={""}></NotesPage>
                                    <CharacterPage myClassName='pageThree'></CharacterPage>
                                    <NotesPage myClassName='pageFour' imgSrc={""}></NotesPage>
                                    <CharacterPage myClassName='pageFive'></CharacterPage>
                                    <NotesPage myClassName='pageSix' imgSrc={""}></NotesPage>
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
