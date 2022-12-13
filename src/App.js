import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

// Campaignvideos
import QuotesSection from './components/QuotesSection';
import Initiatives from "./components/Initiatives"
import Homescreen from './components/Homescreen';
import TimeLineComp from './components/TimeLineComp';
import Footer from './components/Footer'
import Campaignvideos from './components/Campaignvideos';
import ContactForm from './components/ContactForm';





function App() {

 

  return (
     <div className="App">

    <Homescreen/>
    <Campaignvideos/>
    <TimeLineComp/>
    <Initiatives/>
    <QuotesSection/>
    <ContactForm/>
    <Insta/>
    <Footer/>
    </div>
  );
}

export default App;
