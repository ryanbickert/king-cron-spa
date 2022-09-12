import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import { CronButton, ServerRedButton, ServerGreenButton } from '../components/CustomButtons';
import cronGif from '../images/cron-gif.gif';
import serverRedGif from '../images/server-red-gif.gif';
import serverGreenGif from '../images/server-green-gif.gif';

export default function GifsPanel() {
    return (
        <div className="Stone">
            <CustomBorderB />
            <Box sx={{ height: '12vh', width: '100vw', maxWidth: '100%' }}>
                <p style={{ marginTop: 25, marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '5vh', padding: 0 }}>
                    King Cron
                </p>
                <p style={{ marginTop: 15, marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '3vh' }}>
                    Fearless leader and distinguished explorer
                </p>
            </Box>
            <Grid container>
                <Grid item xs={2.25} />
                <Grid item>
                    <Box sx={{ height: '45vh', width: '60vw', overflow: 'hidden' }}>
                        <TransformWrapper
                            panning={{ disabled: true }} wheel={{ disabled: true }} pinch={{ disabled: true }}
                        >
                            {({ zoomToElement }) => {

                            }}
                            <TransformComponent>
                                <div id="cronGif">
                                    <img
                                        src={cronGif}
                                        alt="King Cron"
                                        aria-label="King Cron"
                                        style={{
                                            height: 500,
                                            width: 1150
                                        }}
                                    />
                                </div>
                                <div id="serverRedGif">
                                    <img
                                        src={serverRedGif}
                                        alt="Server Red"
                                        aria-label="Server Red"
                                        style={{
                                            height: 500,
                                            width: 1150
                                        }}
                                    />
                                </div>
                                <div id="serverGreenGif">
                                    <img
                                        src={serverGreenGif}
                                        alt="Server Green"
                                        aria-label="Server Green"
                                        style={{
                                            height: 500,
                                            width: 1150
                                        }}
                                    />
                                </div>
                            </TransformComponent>
                        </TransformWrapper>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ height: '25vh', width: '100vw', maxWidth: '100%' }}>
                <Grid container>
                    <Grid item xs={1.6} />
                    <Grid item xs={3}>
                        <CronButton />
                    </Grid>
                    <Grid item xs={3}>
                        <ServerRedButton />
                    </Grid>
                    <Grid item xs={3}>
                        <ServerGreenButton />
                    </Grid>
                </Grid>
            </Box>
            <CustomBorder />
        </div >
    );
}
