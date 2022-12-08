import React from 'react';
import './App.css';

import Hero from './components/Hero';
import PostsSection from './components/PostsSection';
import Initiatives from "./components/Initiatives"
import Insta from './components/Insta';
import TimeLineComp from './components/TimeLineComp';





function App() {

 

  return (
    <div className="App">
     
 <Hero/>

   <PostsSection/>
 <TimeLineComp/>
<Insta/>


    </div>
  );
}

export default App;
