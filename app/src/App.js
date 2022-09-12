import './App.css';
import React from 'react';
import CronCloseupPanel from './panels/CronCloseupPanel';
import MapPanel from './panels/MapPanel';
import GifsPanel from './panels/GifsPanel';
import GamePanel from './panels/GamePanel';
import ScoresPanel from './panels/ScoresPanel';

function App() {
  return (
    <div>
      <CronCloseupPanel />
      <MapPanel />
      <GifsPanel />
      <GamePanel />
      <ScoresPanel />
    </div >
  );
}

export default App;
