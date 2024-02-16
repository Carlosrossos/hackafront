import { Modal } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { login } from "../reducers/user";
import styles from "../styles/SignUp.module.css";
import { useDispatch } from "react-redux";

const SignUp = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstName, setSignUpFirstName] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    showModal();
  }, []);

  useEffect(() => {
    setIsModalOpen(true);
  }, [onClose]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        firstname: signUpFirstName,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              username: signUpUsername,
              firstname: signUpFirstName,
              token: data.token,
            })
          );
          setIsModalOpen(false);
          setSignUpUsername("");
          setSignUpPassword("");
          onClose();
          router.push("/home");
        }
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    onClose();
  };

  return (
    <Modal
      title="Create your Hackatweet account"
      visible={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText="Sign Up"
      cancelText="Close"
    >
      <input
        onChange={(e) => setSignUpFirstName(e.target.value)}
        value={signUpFirstName}
        className={styles.input}
        type="text"
        placeholder="Firstname"
      />
      <input
        onChange={(e) => setSignUpUsername(e.target.value)}
        value={signUpUsername}
        className={styles.input}
        type="text"
        placeholder="Username"
      />
      <input
        onChange={(e) => setSignUpPassword(e.target.value)}
        value={signUpPassword}
        className={styles.input}
        type="password"
        placeholder="Password"
      />
    </Modal>
  );
};

export default SignUp;
