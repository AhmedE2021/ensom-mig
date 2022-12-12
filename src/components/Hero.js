import React from 'react'
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

{/* ICON FOR SCROLL */}
{/* <div className='expandmore' > <a href='#campaign_videos' > <ExpandMoreIcon style={{ color:'white', transition:'all 0.5s', fontSize:'100px'}}/> </a>
</div> */}

                  
<section className='campaign-videos' id='campaign_videos'>
       
        {/* Green */}
        <div className='campaign-video'>
                <video width="750" height="400" playsInline poster='http://talomensomhed.dk/wp-content/uploads/2022/12/yellowcard.png'  controls >
                        <source src='http://talomensomhed.dk/wp-content/uploads/2022/12/Yellow.mp4' type="video/mp4"/>
                </video>
                <div className='campaign-video-text'>
                        <h1 className='neon'>Ensomhed kan være når man ikke kender andre</h1>
                        <h1 className='green-gradient campaign-video-text__description'>Alt var så anderledes end det, jeg kom fra</h1>
                </div>
        </div>


        {/* Blue */}
        <div className='campaign-video'>
                <div className='campaign-video-text'>
                        <h1 className='neon'>Ensomhed kan være når man er sammen med andre</h1>
                        <h1 className='blue-gradient'>For det meste dukker følelsen op når jeg er sammen med andre</h1>
                </div>
                <video width="750" height="400" playsInline poster={greencard} controls >
                        <source src={greenvideo} type="video/mp4"/>
                </video>
        </div>

        {/* Yellow */}
        <div className='campaign-video'>
                <video width="750" height="400" playsInline poster={purplecard}  controls >
                        <source src={purplevideo} type="video/mp4"/>
                </video>
                <div className='campaign-video-text'>
                        <h1 className='neon'>Ensomhed kan være når man ikke kender andre</h1>
                        <h1 className='yellow-gradient'>Alt var så anderledes end det, jeg kom fra</h1>
                </div> 
        </div>

        {/* Purple */}
        <div className='campaign-video'>
                <div className='campaign-video-text'>
                                        <h1 className='neon'>Ensomhed kan være når man ikke kender andre</h1>
                                        <h1 className='purple-gradient'>Jeg følte mig aldrig som en del af flokken</h1>
                </div>
                <video width="750" height="400" playsInline poster={yellowcard}  controls >
                        <source src={yellowvideo} type="video/mp4"/>
                </video>
        </div>
</section>



</div>
)
}

