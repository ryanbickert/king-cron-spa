import '../App.css';
import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import CustomDataGrid from '../components/CustomDataGrid';
import { CustomBorderB } from '../components/CustomBorders';

export default function GifsPanel() {
    const columns = [
        { field: 'playerName', headerName: 'Name', width: 200 },
        { field: 'score', headerName: 'Score', type: 'number', width: 200 },
    ];

    const [rows, setRows] = useState([
        { id: 1, playerName: "Ryan", score: 3 },
        { id: 2, playerName: "Calvin", score: 5 },
        { id: 3, playerName: "James", score: 6 },
        { id: 4, playerName: "Sam", score: 4 },
        { id: 5, playerName: "Nick", score: 2 },
    ]);

    useEffect(() => {
        fetchHighScores();
        setInterval(fetchHighScores, 60000);
    }, fetchHighScores);

    async function fetchHighScores() {
        fetch('/server/cron-functions/get-scores', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                let placeholderRows = rows.slice(0);
                for (let i = 0; i < 5; i++) {
                    placeholderRows[i].playerName = data[i].PlayerName;
                    placeholderRows[i].score = data[i].Score;
                }
                setRows(placeholderRows);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <div className="Stone">
            <CustomBorderB />
            <Container maxWidth="sm">
                High Scores
                <CustomDataGrid columns={columns} rows={rows} />
            </Container>
        </div >
    );
}
