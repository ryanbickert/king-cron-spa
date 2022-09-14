import '../App.css';
import React from 'react';
import CustomDataGrid from '../components/CustomDataGrid';
import { CustomBorderB } from '../components/CustomBorders';
import ScoresParchment from '../images/scores-parchment.png';

export default function ScoresPanel() {
    return (
        <div className="Stone">
            <CustomBorderB />
            <img
                src={ScoresParchment}
                alt="Scores Parchment"
                aria-label="Scores Parchment"
                draggable='false'
                style={{
                    width: '40vw',
                    height: '60vh',
                    marginTop: '1vh'
                }}
            />
            <div style={{
                width: '30vw',
                height: '50vh',
                position: 'absolute',
                top: '335%',
                left: '35%'
            }}>
                <p style={{ marginTop: 0, marginBottom: 0, color: '#573720', fontFamily: 'AlbertText', fontSize: '3vw', whiteSpace: 'nowrap' }}>
                    High Scores
                </p>
                <p style={{ marginTop: 15, marginBottom: 0, color: '#573720', fontFamily: 'AlbertText', fontSize: '1.5vw', whiteSpace: 'nowrap' }}>
                    Updated daily or when clicked
                </p>
                <CustomDataGrid />
            </div>
        </div >
    );
}
