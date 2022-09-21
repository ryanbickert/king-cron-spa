import '../App.css';
import React from 'react';
import CustomDataGrid from '../components/CustomDataGrid';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import ScoresParchment from '../media/scores-parchment.png';

export default function ScoresPanel() {
    return (
        <div className="Stone" style= {{ position: 'relative' }}>
            <CustomBorderB />
            <img
                src={ScoresParchment}
                alt="Scores Parchment"
                aria-label="Scores Parchment"
                draggable='false'
                style={{
                    width: '50vw',
                    height: '60vmin',
                    marginTop: '1vh'
                }}
            />
            <div style={{
                width: '30vw',
                height: '50vh',
                position: 'absolute',
                top: '17%',
                left: '35%'
            }}>
                <p style={{ marginTop: 0, marginBottom: 0, color: '#573720', fontFamily: 'AlbertText', fontSize: '5vmin', whiteSpace: 'nowrap' }}>
                    High Scores
                </p>
                <p style={{ marginTop: '1.5vmin', marginBottom: 0, color: '#573720', fontFamily: 'AlbertText', fontSize: '2.5vmin', whiteSpace: 'nowrap' }}>
                    Updated daily or when clicked
                </p>
                <CustomDataGrid />
            </div>
            <CustomBorder />
        </div >
    );
}
