import React from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';

function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigation />}>
        <Route index element={<Home />}/>
        <Route path='about/*' element={<About />}/>
        <Route path='projects/*' element={<Home />}/>
        <Route path='resume/*' element={<Home />}/>
      </Route>
    </Routes>
  );
}

export default App;
