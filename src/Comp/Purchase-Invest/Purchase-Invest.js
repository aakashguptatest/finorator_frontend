import {Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Page1/>} />
        <Route exact path="/page2" element={(results) => <Page2 results={results} />} />
  </Routes>
  </BrowserRouter>
  );
}

export default App;
