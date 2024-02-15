import styles from '../styles/Tweet.module.css';
import {useState} from 'react';

function Tweet() {

  const [tweetLength, setTweetLength] = useState(0);


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Home
        </h1>
        <div className={styles.centre}>
          <textarea type="text" onChange={(e) => {setTweetLength(e.target.value)}} value={tweetLength} className={styles.input} placeholder='Tweet here ...' maxLength="280" ></textarea>
          <div className={styles.compteur}>
            <p> {tweetLength.length} / 280 </p>
            <button className={styles.button}>Tweet</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tweet;