import "./Footer.css"


export default function Footer() {

    return(
        <section className="footer-section">

         <div className="footer-message">
          <p>Alle presserelaterede spørgsmål og henvendelser</p>
          <p>vedrørende kampagnen bedes rettet til <span>laura.ensommig@gmail.com</span></p>  
        </div>  
         <div className="footer-icons">
        <img className="footer-logo" src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/VIA-Film-Transmedia-Logo-orange.png"  alt="via-film"/>
        <img className="footer-logo" src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Aaarhus-Kommune-Logo-orange.png"  alt="aarhus-kommune"/>
        <img className="footer-logo" src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Ensom-Mig-Logo-orange-smal.png"  alt="ensom-mig"/>
        </div> 
        </section>
     
    )
}