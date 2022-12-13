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
import Parallax from './components/Parallax';










function App() {



  return (
     <div className="App">

  

 

  
    



 

    <Campaignvideos/>
    <Initiatives/>
    <QuotesSection/>
    <ContactForm/>
    <Insta />
    <Footer/>
   
    </div>
  );
}

export default App;
