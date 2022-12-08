import React from 'react'
import "./Campaign.css"
import "./Hero.css"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import greencard from "../assets/greencard.png"
import purplecard from "../assets/purplecard.png"
import yellowcard from "../assets/yellowcard.png"
import greenvideo from "../assets/Green.mp4"
import yellowvideo from "../assets/Yellow.mp4"
import purplevideo from "../assets/Purple.mp4"







export default function Hero () {
  return (
    <div className='campaign-page NavSection'  id="hero">


<div className='landing-section'> 

<h1 className='landing-title'>TAL OM ENSOMHED</h1>
</div> 
<div className='expandmore' > <a href='#campaign-paragraph' > <ExpandMoreIcon style={{ color:'white', transition:'all 0.5s', fontSize:'100px', textShadow: '0 0 3px white'}}/> </a>
</div>
   

<section id='campaign-paragraph'>
    <div className='campaign-text'>
<p className='campaign-paragraph' >Det kan være svært at finde modet til at fortælle ens kæreste, familiemedlem eller kollega, at man føler sig ensom. Det skyldes ofte, at man er bange for, at det er en følelse, man står alene med og derved kan virke skamfuldt at sige højt. Men måske er det slet ikke så unaturlig en følelse, som vi går og tror?
</p>
  </div>
  </section>



  <h1>Loneliness can look like</h1><br/><br/><br/>

<section className='campaign-videos' id='campaign_videos'>
<div className='campaign-video'>
<video width="750" height="400" playsInline poster='http://talomensomhed.dk/wp-content/uploads/2022/12/yellowcard.png'  controls >
        <source src='http://talomensomhed.dk/wp-content/uploads/2022/12/Yellow.mp4' type="video/mp4"/>
</video>
<div className='campaign-video-text'>
<h1>Mental loneliness</h1>
</div>
</div>


<div className='campaign-video'>
<div className='campaign-video-text'>
<h1>Isolation loneliness</h1>
</div>
<video width="750" height="400" playsInline poster={greencard} controls >
        <source src={greenvideo} type="video/mp4"/>
</video>
</div>


<div className='campaign-video'>
<video width="750" height="400" playsInline poster={purplecard}  controls >
        <source src={purplevideo} type="video/mp4"/>
</video>
<div className='campaign-video-text'>
<h1>Mental loneliness</h1>
</div> 
</div>


<div className='campaign-video'>
<div className='campaign-video-text'>
<h1>Mental loneliness</h1>
</div>
<video width="750" height="400" playsInline poster={yellowcard}  controls >
        <source src={yellowvideo} type="video/mp4"/>
</video>
</div>


</section>



  </div>
  )
}

