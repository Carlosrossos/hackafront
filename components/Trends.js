import { useState, useEffect } from "react";
import styles from "../styles/Trends.module.css";

function Trends() {
  const [tweetsData, setTweetsData] = useState([]);
  const [allTweetsHashtags, setAllTweetsHashtags] = useState([]);
  const [trendsData, setTrendsData] = useState([]);
  const [nbrTweets, setNbrTweets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/trends")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Trends</h1>
        <div className={styles.hashtagContainer}>
          <div className={styles.hashtag}>
            <h3 className={styles.h3}>#Hashtag</h3>
            <p className={styles.p}>Nombre de tweets / #</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Trends;
