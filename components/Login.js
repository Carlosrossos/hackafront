import Image from "next/image";
import styles from "../styles/Login.module.css";

function Login() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.imgLeft}>
          <Image
            src="https://cdn.cms-twdigitalassets.com/content/dam/legal-twitter/privacy-policy-2022/Twitter-terms-of-service-share.jpg.twimg.768.jpg"
            alt="Twitter Background"
            layout="fill"
          />
        </div>
        <div className={styles.rightContent}>
          <div className={styles.logo}>
            <Image
              src="https://www.galea-associes.eu/wp-content/uploads/2016/01/TwitterLogo_white.png"
              alt="logo"
              width={100}
              height={100}
            />
          </div>
          <div className={styles.titles}>
            <h1>See what's</h1>
            <h1>happening</h1>
            <h2>Join Hackatweet today.</h2>
          </div>
          <div className={styles.buttons}>
            <button className={styles.buttonStyle1}>Sign up</button>
            <p>Already have an account?</p>
            <button className={styles.buttonStyle2}>Sign in</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
