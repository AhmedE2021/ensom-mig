import React from 'react';
import './App.css';

import Hero from './components/Hero';
import PostsSection from './components/PostsSection';
import Initiatives from "./components/Initiatives"
import Homescreen from './components/Homescreen';

import TimeLineComp from './components/TimeLineComp';





function App() {

 

  return (
    <div className="App">
     
    <Homescreen />
    <Hero/>
    <TimeLineComp/>
      
 



    </div>
  );
}

export default App;
