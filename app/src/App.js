import './App.css';
import React, { useState, useEffect } from 'react';
import CustomButtons from './components/CustomButtons';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import cronMap from './images/cron-map.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function App() {
  const [score, setScore] = useState(0);

  useEffect(() => {

  })

  return (
    <div>
      <div className="Stone">
        <CustomButtons />
        {score}
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
