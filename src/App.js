import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Hero from './components/Hero';
import QuotesSection from './components/QuotesSection';
import Initiatives from "./components/Initiatives"
import Insta from './components/Insta';
import TimeLineComp from './components/TimeLineComp';
import Footer from './components/Footer'
import Poll from './components/MultiplePoll'
import Campaign from './components/Campaign'
import ContactForm from './components/ContactForm';




function App() {

 

  return (
    <div className="App">


 <Hero/>
  <TimeLineComp/>
  <Initiatives/>
 <QuotesSection/>
 <Insta/>
 <Footer/>
    </div>
  );
}

export default App;
