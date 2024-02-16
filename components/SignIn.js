import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import styles from "../styles/SignIn.module.css";
import { useRouter } from "next/router";

const SignIn = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [signInUsername, setSignInUsername] = useState("");
  const [signInPassword, setSignInPassword] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    showModal(); // Ouvrir le modal lorsque le composant est monté
  }, []);

  useEffect(() => {
    setIsModalOpen(true); // Réouvrir le modal lorsque onClose est modifié
  }, [onClose]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(login({ username: signInUsername, token: data.token }));
          setIsModalOpen(false);
          onClose();
          router.push("/home");
        }
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose(); // Appeler la fonction onClose fournie par le composant parent
  };

  return (
    <Modal
      title="Connect to Hackatweet"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Sign in"
      cancelText="Close"
    >
      <input
        onChange={(e) => setSignInUsername(e.target.value)}
        value={signInUsername}
        className={styles.input}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={(e) => setSignInPassword(e.target.value)}
        value={signInPassword}
        className={styles.input}
        type="password"
        placeholder="Password"
      />
    </Modal>
  );
};

export default SignIn;
