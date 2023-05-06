import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './Comp/Homepage';
import Settings from './Comp/settings/settings';
import Investments from './Comp/investments/investments';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/investments" element={<Investments   />} />
      </Routes>
    </Router>
  );
}

export default App;
