import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import { CronButton, ServerRedButton, ServerGreenButton } from '../components/CustomButtons';
import cronGif from '../media/cron-gif.gif';
import serverRedGif from '../media/server-red-gif.gif';
import serverGreenGif from '../media/server-green-gif.gif';

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
                                width: '100vw',
                                maxWidth: '100%',
                                height: '70vh'
                            }}
                        >
                            <div
                                style={{
                                    display: 'flex'
                                }}
                            >
                                <div>
                                    <Box sx={{ width: '20vw', position: 'absolute', top: '-1%', left: '1.75%', textAlign: 'center' }}>
                                        <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vh', padding: 0, whiteSpace: 'nowrap' }}>
                                            King Cron
                                        </p>
                                        <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vh', whiteSpace: 'pre' }}>
                                            Fearless leader and
                                            <br />distinguished explorer
                                        </p>
                                    </Box>
                                </div>
                                <div
                                    id="cronGif"
                                    style={{
                                        width: '100vw',
                                        height: '70vh',
                                        backgroundImage: `url(${cronGif})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                                <div>
                                    <Box sx={{ width: '20vw', position: 'absolute', top: '-0%', left: '35.25%', textAlign: 'center' }}>
                                        <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vh', padding: 0, whiteSpace: 'nowrap' }}>
                                            Server Red
                                        </p>
                                        <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vh', whiteSpace: 'nowrap' }}>
                                            Rambunctious and reliable
                                        </p>
                                    </Box>
                                </div>
                                <div
                                    id="serverRedGif"
                                    style={{
                                        width: '100vw',
                                        height: '70vh',
                                        backgroundImage: `url(${serverRedGif})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                                <div>
                                    <Box sx={{ width: '20vw', position: 'absolute', top: '-1%', left: '68.5%', textAlign: 'center' }}>
                                        <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vh', padding: 0, whiteSpace: 'nowrap' }}>
                                            Server Green
                                        </p>
                                        <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vh', whiteSpace: 'nowrap' }}>
                                            Hasty and helpful
                                        </p>
                                    </Box>
                                </div>
                                <div
                                    id="serverGreenGif"
                                    style={{
                                        width: '100vw',
                                        height: '70vh',
                                        backgroundImage: `url(${serverGreenGif})`,
                                        backgroundSize: '100% 100%',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                />
                            </div>
                        </TransformComponent>
                        <div style={{
                            width: '100vw',
                            height: '70vh',
                            maxWidth: '100%',
                            position: 'absolute',
                            top: '156%'
                        }}>
                            <CustomBorderB />
                            <Box sx={{ width: '21.45vw', height: '10vh', position: 'absolute', top: '50%', left: '5%', whiteSpace: 'pre' }}>
                                <CronButton handleClick={() => zoomToElement("cronGif")} />
                                <br />
                                <ServerRedButton handleClick={() => zoomToElement("serverRedGif")} />
                                <ServerGreenButton handleClick={() => zoomToElement("serverGreenGif")} />
                            </Box>
                            <Box sx={{ position: 'absolute', top: '96%' }}>
                                <CustomBorder />
                            </Box>
                        </div>
                    </>
                )}
            </TransformWrapper>
        </div>
    );
}
