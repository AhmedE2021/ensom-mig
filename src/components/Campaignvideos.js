import React from 'react'
import "./Campaignvideos.css"


export default function Campaignvideos () {
  return (

	<div className='campaign-page NavSection'  id="hero">
	
	<section className='campaign-videos' id='campaign_videos'>
		
		{/* Green */}
		
		<div className='campaign-video'>
			<video width="750" height="400" playsInline poster='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/greencard.png'  controls >
				<source src='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Green.mp4' type="video/mp4"/>
			</video>
			<div className='campaign-video-text'>
				<h1 className='neon--green campaign-video-text__header'>Ensomhed kan være når man ikke kender andre</h1>
				<h1 className='green-gradient campaign-video-text__description'>Alt var så anderledes end det, jeg kom fra</h1>
			</div>
		</div>
	


		{/* Blue */}

		
			<div className='campaogn-video-content para-green'>
           <p className='campaogn-video-text' >En opgørelse fra 2021 blandt kommuner i Østjylland viser,
            at forekomsten af ensomhed var højest i Aarhus Kommune.
            I Aarhus Kommune oplevede af borgerne, at de var ensomme.
            15% Det svarer til mennesker.40,000</p>
			</div>
			
		<div className='campaign-video'>
			<div className='campaign-video-text'>
				<h1 className='neon--blue campaign-video-text__header'>Ensomhed kan være når man er sammen med andre</h1>
				<h1 className='blue-gradient campaign-video-text__description'>For det meste dukker følelsen op når jeg er sammen med andre</h1>
			</div>
			<video width="750" height="400" playsInline poster='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/bluecard.png' controls >
				<source src='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Blue.mp4' type="video/mp4"/>
			</video>
		</div>
		

		{/* Yellow */}
		
		   <div className='campaogn-video-content para-yellow'>
           <p className='campaogn-video-text' >En opgørelse fra 2021 blandt kommuner i Østjylland viser,
            at forekomsten af ensomhed var højest i Aarhus Kommune.
            I Aarhus Kommune oplevede af borgerne, at de var ensomme.
            15% Det svarer til mennesker.40,000</p>
			</div>
			
		<div className='campaign-video'>
			<video width="750" height="400" playsInline poster='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/yellowcard.png'  controls >
				<source src='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Yellow.mp4' type="video/mp4"/>
			</video>
			<div className='campaign-video-text'>
				<h1 className='neon--yellow campaign-video-text__header'>Ensomhed kan være når man ikke kender andre</h1>
				<h1 className='yellow-gradient campaign-video-text__description'>Alt var så anderledes end det, jeg kom fra</h1>
			</div> 
		</div>
		
		

	{/* Purple */}

	<div className='campaogn-video-content para-purple'>
           <p className='campaogn-video-text' >En opgørelse fra 2021 blandt kommuner i Østjylland viser,
            at forekomsten af ensomhed var højest i Aarhus Kommune.
            I Aarhus Kommune oplevede af borgerne, at de var ensomme.
            15% Det svarer til mennesker.40,000</p>
			</div>


		<div className='campaign-video' id='margin-bottom'>
			<div className='campaign-video-text'>
				<h1 className='neon--purple campaign-video-text__header'>Ensomhed kan være når man ikke kender andre</h1>
				<h1 className='purple-gradient campaign-video-text__description'>Jeg følte mig aldrig som en del af flokken</h1>
			</div>
				<video width="750" height="400" playsInline poster='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/purplecard.png'  controls >
					<source src='http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Purple.mp4' type="video/mp4"/>
			</video>
		</div>
	</section>
</div>
	
	
	
)
}

