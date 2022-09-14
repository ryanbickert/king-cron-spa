import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function CustomDataGrid() {
    const columns = [
        { field: 'playerName', headerName: 'Name', flex: 1 },
        { field: 'score', headerName: 'Score', type: 'number', flex: 1 },
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
        setInterval(fetchHighScores, 8.64e+7);
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
        <Box sx={{ width: '29vw' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                rowHeight='5vh'
                rowsPerPageOptions={[5]}
                hideFooter
                scrollbarSize={0}
                aria-label="High Scores Data Grid"
                onRowClick={fetchHighScores}
                style={{
                    color: '#573720',
                    fontFamily: 'AlbertText',
                    fontSize: '1vw',
                    width: '29vw',
                    height: '34vh',
                    border: 'none'
                }}
            />
        </Box>
    );
}
