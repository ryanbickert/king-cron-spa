import '../App.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import CustomBorder, { CustomBorderB } from '../components/CustomBorders';
import cronMap from '../media/cron-map.png';

export default function MapPanel() {
  return (
    <div className="WoodPanel">
      <CustomBorderB />
      <Box sx={{ height: '5vh', width: '100vw', maxWidth: '100%' }} />
      <Grid container>
        <Grid item xs={1.85} />
        <Grid item>
          <Box sx={{ height: '75vh', width: '70vw' }}>
            <TransformWrapper centerOnInit={true} initialScale={6} wheel={{ step: 0.05 }} >
              {({ centerView }) => (
                <>
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
                    {window.addEventListener('resize', (event) => {
                      centerView();
                    })}
                  </TransformComponent>
                </>
              )}
            </TransformWrapper>
          </Box>
        </Grid>
      </Grid>
      <CustomBorder />
    </div >
  );
}
