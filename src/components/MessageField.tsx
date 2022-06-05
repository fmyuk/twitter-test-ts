import React, { ChangeEvent, useCallback } from "react";
import flex from "styles/utility/flex.module.scss";

type Props = {
  message: string
  onChangeMessage: (message: string) => void
  onClickSend: () => void
};

const MessageField = ({ message, onChangeMessage, onClickSend }: Props) => {
  const handleInputText = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    onChangeMessage(e.target.value);
  }, []);
  
  const handleClickSend = useCallback(() => {
    onClickSend();
  }, []);

  return (
    <div className={flex.flex__row_center}>
      <TextInput
        onChange={handleInputText}
        value={message}
        type={"text"}
      />
      <SendButton
        label={"Send"}
        onClick={handleClickSend}
      />
    </div>
  );
};

export default MessageField;