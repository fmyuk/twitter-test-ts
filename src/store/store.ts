import { combineReducers } from "redux";
import { sendReducer } from "../modules/SendModule/reducers";

export const store = combineReducers({
  send: sendReducer
})

export type StoreState = ReturnType<typeof store>;