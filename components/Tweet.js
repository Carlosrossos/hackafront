import styles from '../styles/Tweet.module.css';
import {useState} from 'react';
import { useSelector } from 'react-redux';

function Tweet() {

  const [tweetText, setTweetLength] = useState('');
  const user = useSelector((state) => state.user.value);

  console.log(user)
  console.log(user.token)

  const handleTweet = () => {
    fetch('http://localhost:3000/tweets', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        text: tweetText,
        date: new Date(),
        author: user.token,
      })
    })
    .then(response => response.json())
  }

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
         Home
        </h1>
        <div className={styles.centre}>
          <textarea type="text" onChange={(e) => {setTweetLength(e.target.value)}} value={tweetText} className={styles.input} placeholder="What's up ..." maxLength="280" ></textarea>
          <div className={styles.compteur}>
            <p> {tweetText.length} / 280 </p>
            <button onClick={()=> handleTweet()} className={styles.button}>Tweet</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Tweet;