import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';

import Login from '../../pages/Login/Login';
import Registration from '../../pages/Registration/Registration';

function App() {
  return (
<>
<Router>
  <Routes>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/register' element={<Registration/>}></Route>
  </Routes>
</Router>

</>
  );
}

export default App;
