import React from 'react'
import "./Campaignvideos.css"


export default function Campaignvideos () {
  return (
     <div className="campaign-page NavSection" id="hero">
        <section className="campaign-videos" id="campaign_videos">
           {/* Green */}
           <div className="campaign-video ">
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/greencard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Green.mp4"
                    type="video/mp4"
                 />
              </video>
              <div className="campaign-video-text">
                 <h1 className="neon--green campaign-video-text__header">
                    Ensomhed kan være når man ikke kender andre
                 </h1>
                 <h1 className="green-gradient campaign-video-text__description">
                    Alt var så anderledes end det, jeg kom fra
                 </h1>
                 <div className='box1 box1-green'></div>
                 <div className='box2 box2-green'></div>
              </div>
             
           </div>

           <div className="campaign-video-content para-green">
              <p className="campaign-video-text">
                 En opgørelse fra 2021 blandt kommuner i Østjylland viser, at
                 forekomsten af ensomhed var højest i Aarhus Kommune. I Aarhus
                 Kommune oplevede af borgerne, at de var ensomme. 15% Det svarer
                 til mennesker.40,000
              </p>
           </div>

			{/* Blue */}
			  
           <div className="campaign-video">
              <div className="campaign-video-text">
                 <h1 className="neon--blue campaign-video-text__header">
                    Ensomhed kan være når man er sammen med andre
                 </h1>
                 <h1 className="blue-gradient campaign-video-text__description">
                    For det meste dukker følelsen op når jeg er sammen med andre
                 </h1>
                 <div className='box1 box1-blue'></div>
                 <div className='box2 box2-blue'></div>
              </div>
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/bluecard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Blue.mp4"
                    type="video/mp4"
                 />
              </video>
           </div>

           {/* Yellow */}

           <div className="campaign-video-content para-yellow">
              <p className="campaign-video-text">
                 Det fremgår også, at ensomhed oftere forekommer blandt unge
                 mennesker. Mere end af de 16-24-årige i Region Midtjylland
                 følte sig ensomme i 2021.
              </p>
           </div>

           <div className="campaign-video">
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/yellowcard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Yellow.mp4"
                    type="video/mp4"
                 />
              </video>
              <div className="campaign-video-text">
                 <h1 className="neon--yellow campaign-video-text__header">
                    Ensomhed kan være når man ikke kender andre
                 </h1>
                 <h1 className="yellow-gradient campaign-video-text__description">
                    Alt var så anderledes end det, jeg kom fra
                 </h1>
                 <div className='box1 box1-yellow'></div>
                 <div className='box2 box2-yellow'></div>
              </div>
           </div>

           {/* Purple */}

           <div className="campaign-video-content para-purple">
              <p className="campaign-video-text">Ensomhed forekommer blandt unge mennesker.
Mere end af de 16-24-årige i Region Midtjylland følte sig ensomme i 2021.

1 ud af 5</p>
           </div>

           <div className="campaign-video" id="margin-bottom">
              <div className="campaign-video-text">
                 <h1 className="neon--purple campaign-video-text__header">
                    Ensomhed kan være når man ikke kender andre
                 </h1>
                 <h1 className="purple-gradient campaign-video-text__description">
                    Jeg følte mig aldrig som en del af flokken
                 </h1>
                 <div className='box1 box1-purple'></div>
                 <div className='box2 box2-purple'></div>
              </div>
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/purplecard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Purple.mp4"
                    type="video/mp4"
                 />
              </video>
           </div>
        </section>

         <div className='gradientTransition'></div>



     </div>
  )
}

