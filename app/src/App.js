import './App.css';
import React, { useState, useEffect } from 'react';
import CustomButtons from './components/CustomButtons';
import CustomBorder, { CustomBorderB } from './components/CustomBorders';
import CustomDataGrid from './components/CustomDataGrid';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import cronCloseup from './images/cron-closeup-transparent.png';
import cronMap from './images/cron-map.png';
import cronGif from './images/cron-gif.gif';
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
          alt="King Cron Closeup"
          aria-label="King Cron Closeup"
          style={{
            width: '90vw',
            height: '90vh'
          }}
        />
        <Box sx={{ height: 500, width: '50vw', maxWidth: '100%', position: 'absolute', top: '10%', left: "35%" }}>
          <p style={{ marginBottom: 0, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '12vh', padding: 0 }}>
            King Cron
          </p>
          <p style={{ marginTop: 20, marginBottom: 40, lineHeight: 1, color: '#BC9660', fontFamily: 'AlbertText', fontSize: '5vh' }}>
            The Kingdom Awaits
          </p>
          <CustomButtons />
        </Box>
        <CustomBorder />
      </div >
      <div className="WoodPanel">
        <CustomBorderB />
        <Box sx={{ height: '5vh', width: '100vw', maxWidth: '100%' }} />
        <Grid container>
          <Grid item xs={1.85} />
          <Grid item>
            <Box sx={{ height: '75vh', width: '70vw' }}>
              <TransformWrapper centerOnInit initialScale={6} wheel={{ step: 0.05 }} >
                <TransformComponent>
                  <img
                    src={cronMap}
                    alt="Map"
                    aria-label="Map"
                    style={{
                      height: '70vh',
                      width: '70vw'
                    }}
                  />
                </TransformComponent>
              </TransformWrapper>
            </Box>
          </Grid>
        </Grid>
        <CustomBorder />
      </div >
      <div className="Stone">
        <CustomBorderB />
        <Box sx={{ height: '5vh', width: '100vw', maxWidth: '100%' }} />
        <Grid container>
          <Grid item xs={1.8} />
          <Grid item>
            <Box sx={{ height: '75vh', width: '70vw' }}>
              <TransformWrapper
                initialScale={3} initialPositionY={-1000}
                panning={{ disabled: true }} wheel={{ disabled: true }} pinch={{ disabled: true }}
              >
                <TransformComponent>
                  <img
                    src={cronGif}
                    alt="Characters"
                    aria-label="Characters"
                    style={{
                      height: '70vh',
                      width: '70vw'
                    }}
                  />
                </TransformComponent>
              </TransformWrapper>
            </Box>
          </Grid>
        </Grid>
        <CustomBorder />
      </div >
      <div className="WoodPanel">
        <CustomBorderB />
        <Box sx={{ height: 50, width: '100vw', maxWidth: '100%' }} />
        <Box sx={{ height: 650, width: '100vw', maxWidth: '100%' }}>
          <UnityGame />
        </Box>
        <CustomBorder />
      </div >
      <div className="Stone">
        <CustomBorderB />
        <Container maxWidth="sm">
          High Scores
          <CustomDataGrid columns={columns} rows={rows} />
        </Container>
      </div >
    </div >
  );
}

export default App;
