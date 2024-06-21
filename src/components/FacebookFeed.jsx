// FacebookFeed.js
import React, { useEffect, useRef } from "react";

const FacebookFeed = () => {
  const fbContainerRef = useRef(null);

  useEffect(() => {
    // Ensure FB SDK is loaded
    if (window.FB) {
      window.FB.XFBML.parse();
    }

    // Resize the Facebook feed when the window is resized
    const handleResize = () => {
      if (fbContainerRef.current) {
        const containerWidth = fbContainerRef.current.offsetWidth;
        const fbPageElement = fbContainerRef.current.querySelector(".fb-page");
        if (fbPageElement) {
          fbPageElement.setAttribute("data-width", containerWidth);
          window.FB.XFBML.parse(fbContainerRef.current);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial resize on mount

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div ref={fbContainerRef} className="w-full max-w-lg mx-auto py-5 bg-gray-900">
      <div
        className="fb-page"
        data-href="https://www.facebook.com/profile.php?id=100083950251634&mibextid=ZbWKwL"
        data-tabs="timeline"
        data-height=""
        data-small-header="false"
        data-adapt-container-width="true"
        data-hide-cover="false"
        data-show-facepile="true"
      >
        <blockquote
          cite="https://www.facebook.com/profile.php?id=100083950251634&mibextid=ZbWKwL"
          className="fb-xfbml-parse-ignore"
        >
          <a href="https://www.facebook.com/profile.php?id=100083950251634&mibextid=ZbWKwL">
            Facebook Page Name
          </a>
        </blockquote>
      </div>
    </div>
  );
};

export default FacebookFeed;
