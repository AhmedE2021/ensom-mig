import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import QuotesSection from './components/QuotesSection';
import Initiatives from "./components/Initiatives"
import Homescreen from './components/Homescreen';


import TimeLineComp from './components/TimeLineComp';
import Footer from './components/Footer'
import Hero from './components/Hero'

import ContactForm from './components/ContactForm';





function App() {

 

  return (
     <div className="App">

    <Homescreen/>
    <Hero/>
    <TimeLineComp/>
    <Initiatives/>
    <QuotesSection/>
    <ContactForm/>
    <Footer/>
    </div>
  );
}

export default App;
