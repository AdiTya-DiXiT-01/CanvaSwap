import ReactDOM from 'react-dom'
import React from 'react'
import App from "./components/App";
import { AuthClient } from "@dfinity/auth-client"

const init = async () => {
  // ReactDOM.render(<App />, document.getElementById("root"));

  const authClient = await AuthClient.create();

  authClient.login({
    maxTimeToLive: BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
    onSuccess: async () => {
      handleAuthenticated(authClient);
    },
  });
}

async function handleAuthenticated(authClient) {
  ReactDOM.render(<App />, document.getElementById("root"));
}

init();


// await authClient.login({
//      identityProvider: "https://identity.ic0.app/#authorize",
//      maxTimeToLive: BigInt(24 * 60 * 60 * 1000 * 1000 * 1000),
//      onSuccess: () => {
//        handleAuthentication(authClient);
//      }
//    })