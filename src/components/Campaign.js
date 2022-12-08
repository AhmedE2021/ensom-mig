import React from 'react'
import './Campaign.css'
import './Videos/video-js.css';
import GreenVideo from './Videos/GreenVideo'
import videoBg from "../assets/videoBg.mp4"
import CloseVideo from "./Videos/CloseVideo"

export default function Campaign() {

    return (
        <div>
        <div className='campaign-page NavSection' id="hero">
            <div className='title'><h1>Tal om Ensomhed</h1></div>
        <div className='cards main'>
            
            <div className="greenCard card popup" onClick={GreenVideo}>
                <img src="" alt=""></img>
                <h2>DÅRLIG HÆNDELSE</h2>
                {/* GREEN VIDEO */}
            <div className='popuptext' id="myPopup">
                <div className='closevideo' onClick={CloseVideo}><h1>X</h1></div>
                
                <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    width="640"
                    height="264"
                    poster="MY_VIDEO_POSTER.jpg"
                    data-setup="{}"
                >
                    <source src={videoBg.mp4} type="video/mp4" />
                    <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer"
                        >supports HTML5 video</a>
                    
                    </p>
                    
                    </video>
                </div>
            </div>
            


            <div className="yellowCard card">
                <img src="" alt=""></img>
                <h2>MENTAL ENSOMHED</h2>
            </div>

            <div className="blueCard card">
                <img src="" alt=""></img>
                <h2>SOCIAL ENSOMHED</h2>
            </div>

            <div className="purpleCard card">
                <img src="" alt=""></img>
                <h2>ISOLATION</h2>
            </div>
        </div>

        {/* GREEN VIDEO */}
        <div className='popuptext' id="myPopup">
                <video
                    id="my-video"
                    class="video-js"
                    controls
                    preload="auto"
                    width="640"
                    height="264"
                    poster="MY_VIDEO_POSTER.jpg"
                    data-setup="{}"
                >
                    <source src={videoBg.mp4} type="video/mp4" />
                    <p class="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank" rel="noreferrer"
                        >supports HTML5 video</a>
                    
                    </p>
                    </video>
                </div>
        <script src="https://vjs.zencdn.net/7.20.3/video.min.js"></script>
        </div>
     
        <div>
      
    
        </div>
        </div>
    )
}