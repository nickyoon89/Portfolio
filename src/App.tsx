import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='about/*' element={<Home />}/>
        <Route path='projects/*' element={<Home />}/>
        <Route path='resume/*' element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
