import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import QuotesSection from './components/QuotesSection';
import Initiatives from "./components/Initiatives"
import Homescreen from './components/Homescreen';
import TimeLineComp from './components/TimeLineComp';
import Footer from './components/Footer'
import Campaignvideos from './components/Campaignvideos';
import ContactForm from './components/ContactForm';
import Insta from './components/Insta';

import ArrowSVG from './components/ArrowSVG';











function App() {



  return (
     <div className="App">

  

 

  
    



 
    <Homescreen/>
    <Campaignvideos/>
    <QuotesSection/>
    <ContactForm/>
    <TimeLineComp/>
    <Initiatives/>
    <Insta />
    <Footer/>
   
    </div>
  );
}

export default App;
