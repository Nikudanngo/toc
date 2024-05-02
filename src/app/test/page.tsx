"use client";

import { ActionCodeSettings, Auth, sendSignInLinkToEmail } from "firebase/auth";
import { useState } from "react";

import { auth } from "@/config/Firebase";

export default function Test() {
  const [email, setEmail] = useState("");
  const actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: "http://localhost:3000/auth",
    // This must be true.
    handleCodeInApp: true,
  };

  const onSubmit = (
    auth: Auth,
    email: string,
    actionCodeSettings: ActionCodeSettings
  ) => {
    console.log(auth, email, actionCodeSettings);
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        // The link was successfully sent. Inform the user.
        // Save the email locally so you don't need to ask the user for it again
        // if they open the link on the same device.
        window.localStorage.setItem("emailForSignIn", email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
        // ...
      });
  };
  return (
    <>
      <div>
        <h1>My App</h1>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email"
        />
        <button onClick={() => onSubmit(auth, email, actionCodeSettings)}>
          Sign in
        </button>
        {/* <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        /> */}
      </div>
    </>
  );
}
