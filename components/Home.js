import styles from "../styles/Home.module.css";
import Image from "next/image";
import Tweet from "./Tweet";
import LastTweets from "./LastTweets";
import Trends from "./Trends";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../reducers/user";

function Home() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const handleLogout = () => {
		dispatch(logout());

  }

  return (
    <div>
      <main className={styles.main}>
        <div className={styles.bandeauGauche}>
            <div>
            <Image
              src="/logo-twitter-blanc.png"
              alt="logo Twitter"
              width={50}
              height={50}
            />
            </div>
          <div className={styles.infosUser}>
            <div className={styles.user}>
              <Image
                src="/Avatar.png"
                alt="Avatar User"
                width={100}
                height={100}
              />
              <div className={styles.textUser}>
                <p>PRENOM</p>
                <p>@{user.username}</p>
              </div>
            </div>
            <button onClick={()=>{handleLogout()}}className={styles.boutonLogout}>Logout</button>
          </div>
        </div>
        <div className={styles.bandeauCentral}>
          <Tweet />
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
