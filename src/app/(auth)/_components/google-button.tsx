"use client";

import { useEffect } from "react";
import { handleGoogleLogin } from "../_actions/google";

declare global {
  interface Window {
    handleGoogleLogin: (
      response: google.accounts.id.CredentialResponse
    ) => Promise<void>;
  }
}

export default function GoogleSignInButton() {
  useEffect(() => {
    /* Load Google's OAuth script */
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  window.handleGoogleLogin = async (
    response: google.accounts.id.CredentialResponse
  ) => {
    await handleGoogleLogin(response.credential);
  };

  return (
    <div>
      <div
        id="g_id_onload"
        data-client_id={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}
        data-callback="handleGoogleLogin"
      ></div>
      <div className="g_id_signin" data-type="standard" data-size="large"></div>
    </div>
  );
}
