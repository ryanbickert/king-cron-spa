import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import CustomBorder from '../components/CustomBorders';
import CustomButtons from '../components/CustomButtons';

export default function CronCloseupPanel() {
    return (
        <div className="Stone">
            <Box sx={{ width: '70vw', height: '50vh', position: 'relative', left: '15%', paddingTop: '5vh' }}>
                <video
                    src='videos/video-panel-mp4.mp4'
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    style={{
                        borderRadius: 15,
                        objectFit: 'cover'
                    }}
                >
                    This video is unable to load on your browser.
                </video>
            </Box>
            <Box sx={{ width: '50vw', position: 'absolute', top: '14%', left: "27.5%" }}>
                <p style={{ marginTop: 0, marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '6vw', padding: 0, whiteSpace: 'nowrap' }}>
                    King Cron
                </p>
                <p style={{ marginTop: '2vw', marginBottom: '3vw', color: '#BC9660', fontFamily: 'AlbertText', fontSize: '4vw', whiteSpace: 'nowrap' }}>
                    The Kingdom Awaits
                </p>
                <CustomButtons />
            </Box>
            <Box sx={{ width: '100vw', height: '3vh', maxWidth: '100%' }} />
            <CustomBorder />
        </div >
    );
}
