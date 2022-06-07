import React from "react";
import { getMessage } from "../modules/SendModule/selectors";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../modules/SendModule/actions";
import MessageField from "../components/Organisms/MessageField";
import { sendTweet } from "modules/SendModule/operations";

export const SendContainer = () => {
  const dispatch = useDispatch();
  const send = useSelector(getMessage);

  const props = {
    message: send.message,
    onChangeMessage: (message: string) => {
      dispatch(actionCreators.changeMessage(message));
    },
    onClickSend: () => {
      dispatch(sendTweet);
    }
  };
  return <MessageField {...props} />;
};