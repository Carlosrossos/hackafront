import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';


function Home() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.bandeauGauche}>
            <div><Image src="/logo-twitter-blanc.png" alt="logo Twitter" width={50} height={50} /></div>
            <div className={styles.infosUser}>
              <Image src="/logo-twitter-blanc.png" alt="logo Twitter" width={50} height={50} />
              <p>PRENOM</p>
              <p>username</p>
              <button>Logout</button>
            </div>
            
        </div>
        <div className={styles.bandeauCentral}>
          <Tweet/>
          <LastTweets />
        </div>
        <div className={styles.bandeauDroite}>
          <Trends />
        </div>
      </main>
    </div>
  );
}

export default Home;
