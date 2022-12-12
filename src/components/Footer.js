import "./Footer.css"
import Kommune from "../assets/KommuneLogo.png"

export default function Footer() {

    return(
        <section className="footer-section">
        <img className="footer-logo" src={Kommune}  alt="aarhus-kommune"/>
        <img className="footer-logo" src={Kommune}  alt="aarhus-kommune"/>
        <img className="footer-logo" src={Kommune}  alt="aarhus-kommune"/>
        </section>
     
    )
}