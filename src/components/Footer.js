import "./Footer.css"


export default function Footer() {

    return (
       <section className="footer-section">
          <div>
             <div className="footer-message">
                <p>Alle presserelaterede spørgsmål og henvendelser</p>
                <p>
                   vedrørende kampagnen bedes rettet til{' '}
                   <a href="mailto:laura.ensommig@gmail.com">
                      <span>laura.ensommig@gmail.com</span>
                   </a>
                </p>
             </div>
             <div className="footer-icons">
                <img
                   className="footer-logo"
                   src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/VIA-Film-_-Transmedia-Logo.png"
                   alt="via-film"
                />
                <img
                   className="footer-logo"
                   src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Aaarhus-Kommune-Logo.png"
                   alt="aarhus-kommune"
                />
                <img
                   className="footer-logo"
                   src="http://quotes-api.talomensomhed.dk/wp-content/uploads/2022/12/Ensom-Mig-Logo.png"
                   alt="ensom-mig"
                />
             </div>
          </div>
       </section>
    )
}