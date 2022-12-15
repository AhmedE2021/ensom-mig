import "./Insta.css"
import { InstagramEmbed } from 'react-social-media-embed';



export default function Insta () {
  
      
 

    return(
      <div className="instagram-section">
<section className="insta-section" id="instagram">
 
 <h1>ENsom mig</h1>

<div className="insta-paragraph">
<p>ENsom Mig er en Instagramprofil, der omfavner unges personlige fortællinger om ensomhed. Siden rummer i dag over 30 modige unge mennesker, der har valgt at fortælle deres historier.</p>

<p>Har du lyst til at dele din historie og hjælpe os i kampen for at bryde tabuet?</p>

<p>Besøg vores Instagram her.</p>

 </div>


<div className="insta-videos">

 <div style={{ justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/COpW2_-hBU1/?utm_source=ig_web_copy_link"  height='91%' width='100%' captioned />
</div>

<div style={{  justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHC8eBFDiOb/?utm_source=ig_web_copy_link"  height='91%' width='100%' captioned />
</div>

<div style={{  justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/COXtzYxBfQM/?utm_source=ig_web_copy_link" height='91%' width='100%' captioned />
</div>

<div style={{  justifyContent: 'center',margin:'1%',height:'100%' }}>
  <InstagramEmbed url="https://www.instagram.com/p/CHn15DyDYqF/?utm_source=ig_web_copy_link" height='91%' width='100%' captioned />
</div>

</div>


<div className="break-taboo">
<div className="break-taboo__div">
  <h1>Lad os bryde tabuet</h1>
  <p> <span className="labelle">sammen! </span></p>
</div>
</div>

</section>
</div>
    )
}




















