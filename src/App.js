import './App.css';
import {Routes, Route, Router} from 'react-router-dom';
import Page1 from './Comp/Purchase-Invest/Page1';
import Page2 from './Comp/Purchase-Invest/Page2';

function App() {
  return (
    <div className="App">
    
    <Routes>
        <Route exact path="/" element={<Page1/>} />
        <Route exact path="/Page2" element={ <Page2 />} />
  </Routes>
  
          </div>
  );
}

export default App;