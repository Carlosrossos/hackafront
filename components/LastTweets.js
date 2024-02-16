import styles from '../styles/LastTweets.module.css';
import OneTweet from './OneTweet';
import { useState, useEffect } from 'react';

function LastTweets() {

  const [lastTweetsData, setLastTweetsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/tweets')
    .then(response => response.json())
    .then(data => {
      setLastTweetsData(data.tweet.map((mess)=> ({
        firstname: mess.author,
        username: mess.author,
        published: mess.date,
        text: mess.text,
        likes: mess.likes.length,
      })))
    })
  },[])

  const lastTweets = lastTweetsData.map((data, i) => {
    return (
      <OneTweet key={i} {...data}/>
    ) })
 

  return (
    <div>
      <main className={styles.main}>
          {lastTweets}
      </main>
    </div>
  );
}

export default LastTweets;