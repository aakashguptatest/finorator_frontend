import {Routes, Route, Router} from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';


function Purchase() {
  
  return (
    <Router>
    <Routes>
        <Route exact path="/" element={<Page1/>} />
        <Route exact path="/Page2" element={ <Page2 />} />
  </Routes>
  </Router>
  );
}

export default Purchase;
