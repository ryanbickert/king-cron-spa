import './App.css';
import React, { useState, useEffect } from 'react';
import CustomButtons from './components/CustomButtons';
import CustomTables from './components/CustomDataGrid';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import scrollBorderA from './images/scroll-border-a.png';
import scrollBorderB from './images/scroll-border-b.png';
import cronCloseup from './images/cron-closeup-transparent.png';
import cronMap from './images/cron-map.png';
import UnityGame from './components/UnityGame';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function App() {
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
    <div>
      <div className="Stone">
        <img
          src={cronCloseup}
          alt="Map"
          style={{
            width: '90vw',
            height: '90vh'
          }} />
        <img
          src={scrollBorderA}
          alt="Map"
          style={{
            width: '100vw',
            height: 30
          }} />
      </div >
      <div className="WoodPanel">
        <img
          src={scrollBorderB}
          alt="Map"
          style={{
            width: '100vw',
            height: 30
          }} />
        <TransformWrapper
          centerOnInit
          initialScale={6}
        >
          <TransformComponent>
            <img
              src={cronMap}
              alt="Map"
              style={{
                width: '70vw',
                height: '70vh'
              }} />
          </TransformComponent>
        </TransformWrapper>
      </div >
      <div className="Stone">
        Gifs here
      </div >
      <div className="WoodPanel">
        <Box sx={{ height: 50, width: '100vw' }} />
        <Box sx={{ height: 650, width: '100vw' }}>
          <UnityGame />
        </Box>
        <img
          src={scrollBorderA}
          alt="Map"
          style={{
            width: '100vw',
            height: 30
          }} />
      </div >
      <div className="Stone">
        <img
          src={scrollBorderB}
          alt="Map"
          style={{
            width: '100vw',
            height: 30
          }} />
        <Container maxWidth="sm">
          High Scores
          <CustomTables columns={columns} rows={rows} />
        </Container>
      </div >
    </div >
  );
}

export default App;
