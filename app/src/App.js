import './App.css';
import React, { useState, useEffect } from 'react';
import CustomButtons from './components/CustomButtons';
import CustomTables from './components/CustomDataGrid';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
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
        Photo here
      </div >
      <div className="WoodPanel">
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
        <UnityGame />
      </div >
      <div className="Stone">
        <Container maxWidth="sm">
          High Scores
          <CustomTables columns={columns} rows={rows} />
        </Container>
      </div >
    </div>
  );
}

export default App;
