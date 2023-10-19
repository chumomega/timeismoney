import * as React from 'react';
import SaveSingleYearPurchase from './SaveSingleYearPurchase'
import DontSaveSingleYearPurchase from './DontSaveSingleYearPurchase'
import SaveMultiYearPurchase from './SaveMultiYearPurchase'
import DontSaveMultiYearPurchase from './DontSaveMultiYearPurchase'

import LandingPage from './LandingPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/timeismoney/" element={<LandingPage/>} />
          <Route path="/timeismoney/aa" element={<SaveSingleYearPurchase/>} />
          <Route path="/timeismoney/ab" element={<DontSaveSingleYearPurchase/>} />
          <Route path="/timeismoney/ba" element={<SaveMultiYearPurchase/>} />
          <Route path="/timeismoney/bb" element={<DontSaveMultiYearPurchase/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
