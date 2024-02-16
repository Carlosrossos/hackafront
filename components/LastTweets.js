import styles from '../styles/LastTweets.module.css';
import OneTweet from './OneTweet';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function LastTweets() {

  const [lastTweetsData, setLastTweetsData] = useState([]);
  const tweetsUpdate = useSelector((state) => state.tweets.value);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/")
      .then((response) => response.json())
      .then((data) => {
        setLastTweetsData([...data.tweet])
      });

  }, [tweetsUpdate]);

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