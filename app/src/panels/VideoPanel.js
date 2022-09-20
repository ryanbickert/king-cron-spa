import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import CustomBorder from '../components/CustomBorders';
import CustomButtons from '../components/CustomButtons';

export default function VideoPanel() {
    return (
        <div className="Stone" style={{ position: 'relative' }}>
            <Box sx={{ width: '100vw', height: '65vh', maxWidth: '100%' }}>
                <video
                    src='videos/video-panel-mp4.mp4'
                    autoPlay={true}
                    loop={true}
                    muted={true}
                    width={'100%'}
                    height={'100%'}
                    style={{
                        objectFit: 'fill',
                        marginTop: -1
                    }}
                >
                    This video is unable to load on your browser.
                </video>
            </Box>
            <Box sx={{ width: '100vw', maxWidth: '100%', position: 'absolute', top: '25%', MozUserSelect: 'none', userSelect: 'none', msUserSelect: 'none', WebkitUserSelect: 'none' }}>
                <p style={{ marginTop: 0, marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '10vmin', whiteSpace: 'nowrap' }}>
                    King Cron
                </p>
                <p style={{ marginTop: '2vmin', marginBottom: '4vmin', color: '#BC9660', fontFamily: 'AlbertText', fontSize: '8vmin', whiteSpace: 'nowrap' }}>
                    The Kingdom Awaits
                </p>
                <CustomButtons />
            </Box>
            <Box sx={{ position: 'absolute', top: '95.5%' }}>
                <CustomBorder />
            </Box>
        </div >
    );
}
