import { ThunkAction } from "redux-thunk";
import { StoreState } from "store/store";
import { SendAction } from "./types";

const twitter = require('twitter');

export const sendTweet = (): ThunkAction<
  void,
  StoreState,
  undefined,
  SendAction
> => async (dispatch, getState) => {
  const state = getState();
  try {
    const client = new twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: process.env.ACCESS_TOKEN_KEY,
      access_token_secret: process.env.ACCESS_TOKEN_SECRET
    });

    client.post('statuses/update', { status: state.send.message },
      function (error: Error, tweet: string, ) {
        console.log(tweet);
        if (error) {
          console.log(error);
        }
      }
    );
  } catch (e) {
    console.log("Error");
  }
};