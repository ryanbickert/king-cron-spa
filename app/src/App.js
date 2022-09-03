import './App.css';
import React, { useState } from 'react';
import CustomButtons from './components/CustomButtons';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { positions } from '@mui/system';
import woodPanelLg from './images/wood-panel-lg.png';
import cronMap from './images/cron-map.png';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function App() {
  const [scale, setScale] = useState(6);

  return (
    <div>
      <div className="WoodPanel">
        <Grid container>
          <Grid item xs={12}>
            <TransformWrapper
              centerOnInit
              initialScale={scale}
              initialPositionX={-3000}
              initialPositionY={-1620}
              panning={{ disabled: scale >= 1, velocityDisabled: true }}
              alignmentAnimation={{ sizeX: 20, sizeY: 20, velocityAlignmentTime: 50}}
              onZoom={(ref) => {
                setScale(ref.state.scale);
                console.log(scale);;
              }}
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
      <div className="Stone">
        hi
      </div >
    </div>
  );
}

export default App;
