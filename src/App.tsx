import React, { Fragment, useEffect } from 'react';
import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/navigation/navigation.component';
import Home from './routes/home/home.component';
import About from './routes/about/about.component';
import $ from 'jquery';

function App() {
  function getRandomArbitrary(min:number, max:number) {
    return Math.random() * (max - min) + min;
  }
  useEffect(()=>{
    let progress = 0;
    const fakeLoaderInterval = window.setInterval(function() {
      const $lp = $('.loading-progress');
      progress = progress + getRandomArbitrary(10, 25)
      $lp.css('transform', `translateX(${progress}%)`);

      if (progress >= 75) {
        window.clearInterval(fakeLoaderInterval);
        $lp.css('transform', 'translateX(100%)');
        setTimeout(() => $('.loading').css('transform', 'translateY(calc(100% + 10px))'), 400);
      }
    }, getRandomArbitrary(100, 500));
  })
  return (
    <Fragment>
      <Routes>
        <Route path="*" element={<Navigation />}>
          <Route index element={<Home />}/>
          <Route path='about/*' element={<About />}/>
          <Route path='projects/*' element={<Home />}/>
          <Route path='resume/*' element={<Home />}/>
        </Route>
      </Routes>
      <div className="loading">
        <h1 className="loading-title">loading</h1>
        <div className="loading-progress"></div>
      </div>
    </Fragment>
  );
}

export default App;
