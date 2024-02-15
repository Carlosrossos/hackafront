import styles from '../styles/Trends.module.css';

function Trends() {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Trends
        </h1>
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