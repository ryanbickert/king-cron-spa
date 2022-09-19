import '../App.css';
import React from 'react';
import Box from '@mui/material/Box';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import CustomButtons from '../components/CustomButtons';
import cronCloseup from '../media/cron-closeup-transparent.png';

export default function CronCloseupPanel() {
    return (
        <div className="Stone">
            <CustomBorderB />
            <img
                src={cronCloseup}
                alt='King Cron Closeup'
                aria-label='King Cron Closeup'
                draggable='false'
                style={{
                    width: '90vw',
                    height: '90vh'
                }}
            />
            <Box sx={{ height: 500, width: '50vw', position: 'relative', top: '10%', left: "35%" }}>
                <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '12vh', padding: 0 }}>
                    King Cron
                </p>
                <p style={{ marginTop: 20, marginBottom: 40, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '5vh' }}>
                    The Kingdom Awaits
                </p>
                <CustomButtons />
            </Box>
            <CustomBorder />
        </div >
    );
}
