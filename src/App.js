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
          <Route path="/" element={<LandingPage/>} />
          <Route path="/aa" element={<SaveSingleYearPurchase/>} />
          <Route path="/ab" element={<DontSaveSingleYearPurchase/>} />
          <Route path="/ba" element={<SaveMultiYearPurchase/>} />
          <Route path="/bb" element={<DontSaveMultiYearPurchase/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
