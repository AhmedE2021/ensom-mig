import "./Insta.css"
import { InstagramEmbed } from 'react-social-media-embed';
import { Component } from "react";
import Slider from "react-slick";


export default class Insta extends Component {
  render(){

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
           
          }
        },
       
        
      ]
  };

    return(
<section className="insta-section" id="instagram">
 
 <h1>ENsom mig</h1>

<div className="insta-paragraph">
 <p>Together we can break the taboo. website, but you can still share your stories via the hashtag #talomensomhed.</p>

 <p>You can be at the forefront of the fight to break the taboo around loneliness by sharing your own experiences of loneliness or by sending a thought to those who feel lonely. You can do that here on the page or by using the hashtag #talomensomhed on your favorite SoMe platform.</p>

 <p>Selected quotes will be shared here on the site, but all contributions are equally important. Your post or story can help inspire others in your network to dare to speak openly about it.</p>
 </div>

 <Slider {...settings}>


 <div style={{ display: 'flex', justifyContent: 'center',margin:'1%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/COpW2_-hBU1/?utm_source=ig_web_copy_link" width={328} height={667} captioned />
</div>

<div style={{ display: 'flex', justifyContent: 'center',margin:'1%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHC8eBFDiOb/?utm_source=ig_web_copy_link" width={328} height={667} captioned />
</div>

<div style={{ display: 'flex', justifyContent: 'center',margin:'1%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHn15DyDYqF/?utm_source=ig_web_copy_link" width={328} height={667} captioned />
</div>



</Slider>
<div className="insta-paragraph">
<p>+30 people shared their expeierence . # campaign info here</p>
<p>Break the taboo together! - short massage at the end</p>
</div>

</section>

    )
}}