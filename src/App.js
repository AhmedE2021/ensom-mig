import React from 'react';
import './App.css';

import Hero from './components/Hero';
import PostsSection from './components/PostsSection';
import Initiatives from "./components/Initiatives"
import Insta from './components/Insta';
import TimeLineComp from './components/TimeLineComp';
import Footer from './components/Footer'
import Poll from './components/MultiplePoll'




function App() {

 

  return (
    <div className="App">
     
   <Hero/>
   <Poll/>
  <TimeLineComp/>
  <Initiatives/>
 <PostsSection/>

    </div>
  );
}

export default App;
