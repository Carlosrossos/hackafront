import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import styles from "../styles/SignUp.module.css";

const SignUp = ({ onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
    setIsModalOpen(false);
    onClose();
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
      <input className={styles.input} type="text" placeholder="Firstname" />
      <input className={styles.input} type="text" placeholder="Username" />
      <input className={styles.input} type="password" placeholder="Password" />
    </Modal>
  );
};

export default SignUp;
