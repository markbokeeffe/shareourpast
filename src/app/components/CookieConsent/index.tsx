
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

  const rejectCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50">
      <div className="fixed bottom-0 left-0 right-0 flex flex-col lg:flex-row gap-4 items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-black text-base mr-16">
          We use cookies to better understand our users and so tailor our site to better meet your needs.  However, you can choose to accept these or not.
        </span>
        <span className="flex flex-row gap-4">
          <button className="bg-[#007b8b] py-2 px-2 rounded text-white w-[130px]" onClick={() => acceptCookie()}>
            Accept
          </button>
          <button className="bg-[#007b8b] py-2 px-2 rounded text-white w-[130px]" onClick={() => rejectCookie()}>
            Don&#39;t Accept
          </button>
        </span>
      </div>
    </div>
  );
};

export default CookieConsent;