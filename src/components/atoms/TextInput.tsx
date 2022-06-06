import React, { ChangeEvent } from "react";
import styles from "sytles/atoms/button.module.scss";

type Props = {
  value: string | number;
  type: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = React.memo((props: Props) => {
  const { onChange, value, type } = props;
  return (
    <input
      className={styles.form__text}
      onChange={onChange}
      value={value}
      type={type}
    />
  )
});

export default TextInput;