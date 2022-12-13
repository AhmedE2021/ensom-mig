import "./Insta.css"
import { InstagramEmbed } from 'react-social-media-embed';



export default function Insta () {
  
      
 

    return(
<section className="insta-section" id="instagram">
 
 <h1>ENsom mig</h1>

<div className="insta-paragraph">
 <p>Together we can break the taboo. website, but you can still share your stories via the hashtag #talomensomhed.</p>

 <p>You can be at the forefront of the fight to break the taboo around loneliness by sharing your own experiences of loneliness or by sending a thought to those who feel lonely. You can do that here on the page or by using the hashtag #talomensomhed on your favorite SoMe platform.</p>

 <p>Selected quotes will be shared here on the site, but all contributions are equally important. Your post or story can help inspire others in your network to dare to speak openly about it.</p>
 </div>


<div className="insta-videos">

 <div style={{ justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/COpW2_-hBU1/?utm_source=ig_web_copy_link"  height='91%' width='100%' captioned />
</div>

<div style={{  justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHC8eBFDiOb/?utm_source=ig_web_copy_link"  height='91%' width='100%' captioned />
</div>

<div style={{  justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHn15DyDYqF/?utm_source=ig_web_copy_link" height='91%' width='100%' captioned />
</div>

<div style={{  justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHn15DyDYqF/?utm_source=ig_web_copy_link" height='91%' width='100%' captioned />
</div>

</div>


<div className="insta-paragraph">
<p>+30 people shared their expeierence . # campaign info here</p>
<p>Break the taboo together! - short massage at the end</p>
</div>

</section>

    )
}




















