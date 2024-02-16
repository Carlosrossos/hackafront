import { useState, useEffect } from "react";
import styles from "../styles/Trends.module.css";
import { useSelector } from "react-redux";

function Trends() {
  const [tweetsTrend, setTweetsTrend] = useState([]);
 
const tweetsUpdate = useSelector((state) => state.tweets.value);

  useEffect(() => {
    fetch("http://localhost:3000/tweets/trends")
      .then((response) => response.json())
      .then((data) => {

        setTweetsTrend([...data.trends])
      });
  }, [tweetsUpdate]);

  const trendHasht = tweetsTrend.map((data, i) => {
    return (  
        <div key={i} className={styles.hashtag}>
            <h3 className={styles.h3}>{data.hashtag}</h3>
            <p className={styles.p}>{data.count}</p>
        </div>
    ) })


  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>Trends</h1>
        <div className={styles.hashtagContainer}>
          {trendHasht}
        </div>
      </main>
    </div>
  );
}

export default Trends;
