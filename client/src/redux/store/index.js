import { configureStore } from "@reduxjs/toolkit";
import walletReducer from "./wallet";
import tezosReducer from "./tezos";

export const store = configureStore({
  reducer: {
    wallet: walletReducer,
    tezos: tezosReducer,
  },
});
