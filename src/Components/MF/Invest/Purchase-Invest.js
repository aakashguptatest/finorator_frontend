import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
function Purchase() {
  
  return (
    <>
    <Router>
    <Routes>
        <Route exact path="/" element={<Page1/>} />
        <Route exact path="/Page2" element={ <Page2 />} />
        <Route exact path='/Page3' element={<Page3 />}/>
        <Route exact path="/Page4" element={ <Page4 />} />
  </Routes>
  </Router>
  </>
  );
}

export default Purchase;
