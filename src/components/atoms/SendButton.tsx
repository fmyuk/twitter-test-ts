import React from "react";
import styles from "sytles/atoms/button.module.scss";

type Props = {
  label: string;
  onClick: () => void;
};

const SendButton = React.memo((props: Props) => {
  const { label, onClick } = props;
  return (
    <button
      className={styles.button__search}
      onClick={onClick}
    >
      {label}
    </button>
  )
});

export default SendButton;