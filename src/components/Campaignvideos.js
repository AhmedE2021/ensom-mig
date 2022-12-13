import React from 'react'
import "./Campaignvideos.css"
import { ParallaxBanner } from 'react-scroll-parallax';




import greencard from "../assets/greencard.png"
import purplecard from "../assets/purplecard.png"
import yellowcard from "../assets/yellowcard.png"
import greenvideo from "../assets/Green.mp4"
import yellowvideo from "../assets/Yellow.mp4"
import purplevideo from "../assets/Purple.mp4"







export default function Campaignvideos () {
  return (
<div className='campaign-page NavSection'  id="hero">
	
	<section className='campaign-videos' id='campaign_videos'>
		
		{/* Green */}
		<div className='campaign-video'>
			<video width="750" height="400" playsInline poster='http://talomensomhed.dk/wp-content/uploads/2022/12/yellowcard.png'  controls >
				<source src='http://talomensomhed.dk/wp-content/uploads/2022/12/Yellow.mp4' type="video/mp4"/>
			</video>
			<div className='campaign-video-text'>
				<h1 className='neon--green campaign-video-text__header'>Ensomhed kan være når man ikke kender andre</h1>
				<h1 className='green-gradient campaign-video-text__description'>Alt var så anderledes end det, jeg kom fra</h1>
			</div>
		</div>

		{/* Blue */}
		<div className='campaign-video'>
			<div className='campaign-video-text'>
				<h1 className='neon--blue campaign-video-text__header'>Ensomhed kan være når man er sammen med andre</h1>
				<h1 className='blue-gradient campaign-video-text__description'>For det meste dukker følelsen op når jeg er sammen med andre</h1>
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
				<h1 className='neon--yellow campaign-video-text__header'>Ensomhed kan være når man ikke kender andre</h1>
				<h1 className='yellow-gradient campaign-video-text__description'>Alt var så anderledes end det, jeg kom fra</h1>
			</div> 
		</div>

	{/* Purple */}
		<div className='campaign-video' id='margin-bottom'>
			<div className='campaign-video-text'>
				<h1 className='neon--purple campaign-video-text__header'>Ensomhed kan være når man ikke kender andre</h1>
				<h1 className='purple-gradient campaign-video-text__description'>Jeg følte mig aldrig som en del af flokken</h1>
			</div>
				<video width="750" height="400" playsInline poster={yellowcard}  controls >
					<source src={yellowvideo} type="video/mp4"/>
			</video>
		</div>
	</section>
</div>
)
}

