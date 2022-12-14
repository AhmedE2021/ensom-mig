import styles from './Homescreen.module.css'
import bluestill from '../assets/STILL_BLUE.jpg'


export default function Homescreen() {

  return (
     <div className={styles.HomescreenComponent}>
        <div className={styles.Homescreen}>
           <div>
            
           
           <div class="hero_blob2_green"></div>
           <h2 className={`labelle neon--white ${styles.talkAbout}`}>Tal om</h2>
           <h1 className={`lato ${styles.loneliness}`}>ENSOMHED</h1>
       
           <div class="hero_blob1_pink"></div>
          <div class="hero_blob3_yellow"></div>

         <div class="hero_blob4_blue"></div>
              
              
              
           </div>
      
        </div>

        <div className={styles.imgSection}>
           <img src={bluestill} alt="city" className={styles.cityIMG} />

           <div className={styles.textContainer}>
              <h1 className={`neon--green ${styles.header}`}>
                 Hvorfor taler vi ikke om ensomhed?
              </h1>
              <p>
                 Det kan være svært at finde modet til at fortælle ens kæreste,
                 familiemedlem eller kollega, at man føler sig ensom. Det
                 skyldes ofte, at man er bange for, at det er en følelse, man
                 står alene med og derved kan virke skamfuldt at sige højt. Men
                 måske er det slet ikke så unaturlig en følelse, som vi går og
                 tror?
              </p>
           </div>
        </div>
     </div>
  )
}