import * as React from 'react';
import SaveSingleYearPurchase from './SaveSingleYearPurchase'
import LandingPage from './LandingPage'

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/aa" element={<SaveSingleYearPurchase/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
