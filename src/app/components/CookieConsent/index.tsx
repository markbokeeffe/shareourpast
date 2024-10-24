
"use client"
import React from "react";
import { hasCookie, setCookie } from "cookies-next";

const CookieConsent = () => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-black text-base mr-16">
          We use cookies to better understand our users and so tailor our site to better meet your needs.  By using our website, you consent to cookies.
        </span>
        <button className="bg-[#007b8b] py-2 px-8 rounded text-white" onClick={() => acceptCookie()}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;