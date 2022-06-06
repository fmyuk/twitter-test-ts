import { Reducer } from "react";
import { actionTypes } from "./actions";
import { Send, SendAction } from "./types";

export const initialState: Send = {
  message: ""
};

export const sendReducer: Reducer<Send, any> =
  (state: Send = initialState, action: SendAction) => {
  switch (action.type) {
    case actionTypes.CHANGE_MESSAGE:
      return {
        ...state,
        message: action.message
      }
    default:
      return state;
  }
};;