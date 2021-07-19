import React from 'react';
import './App.scss';
import Grid from './components/Grid';
import Form from './components/Form';
import { StoreProvider } from './store';

function App() {
  return (
    <StoreProvider>
      <div className='app'>
        <Form />
        CLICK ON BOARD TO PLAY
        <Grid />
      </div>
    </StoreProvider>
  );
}

export default App;
