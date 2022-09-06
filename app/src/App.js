import './App.css';
import React, { useState, useEffect } from 'react';
import CustomButtons from './components/CustomButtons';
import CustomTables from './components/CustomTables';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import cronMap from './images/cron-map.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function App() {
  const [columns, setColumns] = useState([
    { field: 'playerName', headerName: 'Name', width: 200 },
    { field: 'score', headerName: 'Score', type: 'number', width: 200 },
  ]);

  const [rows, setRows] = useState([
    { id: 1, playerName: "Ryan", score: 7 },
    { id: 2, playerName: "Test", score: 13 },
  ]);

  useEffect(() => {
    fetch('/server/cron-functions/get-scores', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < 5; i++) {
          //setPlayerData(playerData => [...playerData, mapPlayerData(data[i].PlayerName, data[i].Score)]);
          //setRows(rows +)
          //test[i] = mapPlayerData(data[i].PlayerName, data[i].Score);
        }
      })
      .then((data) => {
      });
  })

  return (
    <div>
      <div className="Stone">
        <CustomTables columns={columns} rows={rows} />
      </div >
      <div className="WoodPanel">
        <Grid container>
          <Grid item xs={12}>
            <TransformWrapper
              centerOnInit
              initialScale={6}
            >
              <TransformComponent>
                <img
                  src={cronMap}
                  alt="Map"
                  style={{
                    width: '100vw',
                    height: '100vh'
                  }} />
              </TransformComponent>
            </TransformWrapper>
          </Grid>
        </Grid>
      </div >
    </div>
  );
}

export default App;
