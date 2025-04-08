"use client";

import { useEffect } from "react";

export default function GoogleSignInButton() {
  useEffect(() => {
    /* Load Google's OAuth script */
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  function handleGoogleLogin(response: any) {
    fetch("/api/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: response.credential }),
    }).then(() => {
      window.location.href = "/"; // Redirect after login
    });
  }

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
