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
<div className='expandmore' > <a href='#campaign-paragraph' > <ExpandMoreIcon style={{ color:'white', transition:'all 0.5s', fontSize:'100px', textShadow: '0 0 3px white'}}/> </a>
</div>
</div> 


<section>
    <div className='campaign-text'>
<p className='campaign-paragraph' id='campaign-paragraph'>Loneliness can affect anyone. The feeling can arise both when you are alone and with others.
It can be when you are sitting alone at home on a Friday evening, or when you are at a family birthday or party with friends.
 Some rarely experience it, while others live with the feeling on a daily basis</p>
  </div>
  </section>




<section className='campaign-videos' id='campaign_videos'>
npm install @mui/material @emotion/react @emotion/styled

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

