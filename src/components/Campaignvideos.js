import React from 'react'
import "./Campaignvideos.css"


export default function Campaignvideos () {
  return (
     <div className="campaign-page NavSection" id="hero">
        <section className="campaign-videos" id="campaign_videos">
           {/* Green */}
           <div className="campaign-video" id="first-video">
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/greencard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/01_Gron_V6_Low.mp4"
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

                 <div className="box1 box1-green"></div>
                 <img
                    className="campaign-video-doll"
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/greendoll.png"
                    alt="manikkekenderandre"
                 />
                 {/* <div className="box2 box2-green"></div>

                 <div>
                    <div className="box1 box1-green"></div>
                    <div className="box2 box2-green"></div>
                 </div> */}
              </div>
           </div>

           {/* Info banner green */}
           <div className="banner-text para-green">
              <p>
                 Ensomhed er en ubehagelig følelse, der opstår som følge af en
                 oplevet uoverensstemmelse mellem ønskede sociale relationer og
                 faktiske sociale relationer.
              </p>
              
           </div>

           {/* Blue */}
           <div className="campaign-video" id="second-video">
              <div className="campaign-video-text">
                 <h1 className="neon--blue campaign-video-text__header">
                    Ensomhed kan være når man er sammen med andre
                 </h1>
                 <h1 className="blue-gradient campaign-video-text__description">
                    For det meste dukker følelsen op når jeg er sammen med andre
                 </h1>
                 <div className="box3 box3-blue"></div>
                 <img
                    className="campaign-video-doll"
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/bluedoll.png"
                    alt="manikkekenderandre"
                 />
                 <div className="box4 box4-blue"></div>
              </div>
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/bluecard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/03_Bla_V6_Low.mp4"
                    type="video/mp4"
                 />
              </video>
           </div>

           {/* Info banner */}
           <div className="banner-text para-yellow">
              <p>
                 En opgørelse fra 2021 blandt kommuner i Region Midtjylland
                 viser, at forekomsten af ensomhed var højest i Aarhus Kommune.
                 <span className="labelle neon--white"> 15%</span> af borgerne i
                 kommunen oplevede, at de var ensomme. Det svarer til{' '}
                 <span className="labelle neon--white">40.000</span> mennesker.
              </p>
              <cite>DEFACTUM, Region Midtjylland 2022</cite>
           </div>

           {/* Yellow */}
           <div className="campaign-video" id="third-video">
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/yellowcard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/02_Gul_V6_Low.mp4"
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
                 <div className="box1 box1-yellow"></div>
                 <img
                    className="campaign-video-doll"
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/yellowdoll.png"
                    alt="manikkekenderandre"
                 />
                 <div className="box2 box2-yellow"></div>
              </div>
           </div>

           {/* Info banner */}
           <div className="banner-text para-purple">
              <p>
                 Ensomhed forekommer oftere blandt unge mennesker. Mere end
                 <span className="labelle neon--white"> 20% </span> af de
                 16-24-årige i Region Midtjylland følte sig ensomme i 2021.
              </p>
              <cite>DEFACTUM, Region Midtjylland 2022</cite>
           </div>

           {/* Purple */}
           <div className="campaign-video" id="fourth-video">
              <div className="campaign-video-text">
                 <h1 className="neon--purple campaign-video-text__header">
                    Ensomhed kan være når man ikke kender andre
                 </h1>
                 <h1 className="purple-gradient campaign-video-text__description">
                    Jeg følte mig aldrig som en del af flokken
                 </h1>
                 <div className="box3 box3-purple"></div>
                 <img
                    className="campaign-video-doll"
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/purpledoll.png"
                    alt="manikkekenderandre"
                 />
                 <div className="box4 box4-purple"></div>
              </div>
              <video
                 width="750"
                 height="400"
                 playsInline
                 poster="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/purplecard.png"
                 controls
              >
                 <source
                    src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/04_Lilla_V6_Low.mp4"
                    type="video/mp4"
                 />
              </video>
           </div>
        </section>

        <div className="gradientTransition"></div>
     </div>
  )
}

