import styles from "../styles/OneTweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useSelector } from "react-redux";

function OneTweet(props) {

const  handleLikeTweet = () => {

}

const handleDeleteTweet = () => {
  if (!user.token)
  {return}
  fetch('http://localhost:3000/tweets/', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).then(response => response.json())
  .then(data => {
    
  })
}


  return (
    <div className={styles.tweetContainer}>
      <div className={styles.user}>
        <Image
          src="/Avatar.png"
          alt="logo Twitter"
          width={75}
          height={75}
          className={styles.avatar}
        ></Image>
        <p>
          <span>Prénom</span>
          <span>{props.username}</span>
          <span>{props.published}</span>
        </p>
      </div>
      <p>
        {props.text}
      </p>
      <div>
        <FontAwesomeIcon
          icon={faHeart}
          onClick={() => handleLikeTweet()}
          className="like"
        /> <span>{props.likes}</span> 
        <FontAwesomeIcon
          icon={faTrash}
          onClick={() => handleDeleteTweet()}
          className="delete"
        />
      </div>
    </div>
  );
}

export default OneTweet;
