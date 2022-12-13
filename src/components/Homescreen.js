import styles from './Homescreen.module.css'
import bluestill from '../assets/STILL_BLUE.jpg'


export default function Homescreen() {

    return (
      <>
        
				<div className={styles.Homescreen}>
					<div>
						<h2 className={`labelle ${styles.talkAbout}`}>Tal om</h2>
						<h1 className={`lato ${styles.loneliness}`}>ENSOMHED</h1>
					</div>
				</div>

        <div className={styles.imgSection}>
          <img src={bluestill} alt="city" className={styles.cityIMG} />
          
          <div className={styles.textContainer}>
            <h1 className={`neon ${styles.header}`}>Hvorfor taler vi ikke om det?</h1>
            <p>
              Det kan være svært at finde modet til at fortælle ens kæreste,
              familiemedlem eller kollega, at man føler sig ensom. Det skyldes
              ofte, at man er bange for, at det er en følelse, man står alene
              med og derved kan virke skamfuldt at sige højt. Men måske er det
              slet ikke så unaturlig en følelse, som vi går og tror?
            </p>
          </div>
        </div>      
        
			</>
		);
}