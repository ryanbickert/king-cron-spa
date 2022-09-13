import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import { CronButton, ServerRedButton, ServerGreenButton } from '../components/CustomButtons';
import cronGif from '../images/cron-gif.gif';
import serverRedGif from '../images/server-red-gif.gif';
import serverGreenGif from '../images/server-green-gif.gif';

export default function GifsPanel() {
    return (
        <div className='Default'>
            <TransformWrapper
                initialScale={1}
                minScale={1}
                panning={{ disabled: true }}
                wheel={{ disabled: true }}
                pinch={{ disabled: true }}
            >
                {({ zoomToElement }) => (
                    <>
                        <TransformComponent
                            wrapperStyle={{
                                height: '70vh',
                                width: '100vw',
                                maxWidth: '100%'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex'
                                }}
                            >
                                <div>
                                    <Box sx={{ width: '20vw', position: 'absolute', top: '-1%', left: '1.75%', textAlign: 'center' }}>
                                        <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vh', padding: 0 }}>
                                            King Cron
                                        </p>
                                        <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vh' }}>
                                            Fearless leader and distinguished explorer
                                        </p>
                                    </Box>
                                </div>
                                <div
                                    id="cronGif"
                                    style={{
                                        height: '70vh',
                                        width: '100vw',
                                        backgroundImage: `url(${cronGif})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                                <div>
                                    <Box sx={{ width: '20vw', position: 'absolute', top: '-0%', left: '35.25%', textAlign: 'center' }}>
                                        <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vh', padding: 0 }}>
                                            Server Red
                                        </p>
                                        <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vh' }}>
                                            Rambunctious and reliable
                                        </p>
                                    </Box>
                                </div>
                                <div
                                    id="serverRedGif"
                                    style={{
                                        height: '70vh',
                                        width: '100vw',
                                        backgroundImage: `url(${serverRedGif})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                                <div>
                                    <Box sx={{ width: '20vw', position: 'absolute', top: '-1%', left: '68.5%', textAlign: 'center' }}>
                                        <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vh', padding: 0 }}>
                                            Server Green
                                        </p>
                                        <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vh' }}>
                                            Hasty and helpful
                                        </p>
                                    </Box>
                                </div>
                                <div
                                    id="serverGreenGif"
                                    style={{
                                        height: '70vh',
                                        width: '100vw',
                                        backgroundImage: `url(${serverGreenGif})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                            </div>
                        </TransformComponent>
                        <div style={{
                            height: '70vh',
                            width: '100vw',
                            maxWidth: '100%',
                            position: 'absolute',
                            top: '179.5%'
                        }}>
                            <Box sx={{ position: 'absolute', top: '0%', textAlign: 'center', padding: 0, marginBottom: 0 }}>
                                <CustomBorderB />
                            </Box>
                            <Box sx={{ height: '10vh', width: '20vw', position: 'absolute', top: '50%', left: '5%', textAlign: 'center' }}>
                                <CronButton handleClick={() => zoomToElement("cronGif")} />
                                <ServerRedButton handleClick={() => zoomToElement("serverRedGif")} />
                                <ServerGreenButton handleClick={() => zoomToElement("serverGreenGif")} />
                            </Box>
                            <Box sx={{ position: 'absolute', top: '95.65%', textAlign: 'center', padding: 0, marginBottom: 0 }}>
                                <CustomBorder />
                            </Box>
                        </div>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
}
