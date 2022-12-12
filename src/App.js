import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import QuotesSection from './components/QuotesSection';
import Initiatives from "./components/Initiatives"
import Homescreen from './components/Homescreen';

import TimeLineComp from './components/TimeLineComp';
import Footer from './components/Footer'
import Poll from './components/MultiplePoll'

import ContactForm from './components/ContactForm';




function App() {

 

  return (
     <div className="App">

<Homescreen />
 <Hero/>
  <TimeLineComp/>
  <Initiatives/>
 <QuotesSection/>

 <Footer/>
    </div>
  );
}

export default App;
