import styles from './Homescreen.module.css'


export default function Homescreen() {

    return (
      <div className={`test ${styles.Homescreen}`}>
        <div>
            <h2 className={`'labelle' ${styles.talkAbout}`}>Talk about</h2>
            <h1 className={`'lato' ${styles.loneliness}`}>loneliness</h1>
        </div>
      </div>
    );
}