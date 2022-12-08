import React from 'react'
import GreenVideo from '../assets/Green.mp4'
import BlueVideo from '../assets/Blue.mp4'
import PurpleVideo from '../assets/Purple.mp4'
import YellowVideo from '../assets/Yellow.mp4'
import GreenImg from "../assets/Green.png"
import BlueImg from "../assets/Blue.png"
import PurpleImg from "../assets/Purple.png"
import YellowImg from "../assets/Yellow.png"





export default function VideoBg () {
  return (
    <div className='main sec sec1' id='hero'>
        <div className="overlay"></div>
        <div className='grid-videos'>
        <div className='videos'>
        <video playsInline controls >
        <source src={GreenVideo} type="video/mp4"/>
        </video>
        <video width="750" height="500" playsInline poster={BlueImg}  controls >
        <source src={GreenVideo} type="video/mp4"/>
        </video>
        <video src={BlueVideo} poster={BlueImg}  controls Playing/>
        <video src={YellowVideo} poster={YellowImg} controls Playing/>
        </div>
        <p className='lineUp'>1. Why don't we talk about loneliness? (section with the four campaign films) 
        It can be difficult to find the courage to tell your lover, family member or colleague that you feel lonely.
         Often this is because you are afraid that it is one feeling that you are alone.
          But maybe it's not as unnatural a feeling as we are go and believe?
        </p>
        <p className='lineUp'>1. Why don't we talk about loneliness? (section with the four campaign films) 
        It can be difficult to find the courage to tell your lover, family member or colleague that you feel lonely.
         Often this is because you are afraid that it is one feeling that you are alone.
          But maybe it's not as unnatural a feeling as we are go and believe?
        </p>
        <p className='lineUp'>1. Why don't we talk about loneliness? (section with the four campaign films) 
        It can be difficult to find the courage to tell your lover, family member or colleague that you feel lonely.
         Often this is because you are afraid that it is one feeling that you are alone.
          But maybe it's not as unnatural a feeling as we are go and believe?
        </p>
          <p className='lineUp'>1. Why don't we talk about loneliness? (section with the four campaign films) 
        It can be difficult to find the courage to tell your lover, family member or colleague that you feel lonely.
         Often this is because you are afraid that it is one feeling that you are alone.
          But maybe it's not as unnatural a feeling as we are go and believe?
        </p>
        </div>
        <div className="content">
            <h1>tal om ensomhed</h1>
        </div>
<br></br>
    </div>
  )
}








