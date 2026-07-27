"use client";

import dynamic from "next/dynamic";

const GoogleAnalytics = dynamic(() => import("./GoogleAnalytics"), { ssr: false });
const WebVitals = dynamic(() => import("./WebVitals"), { ssr: false });

export default function ClientOnly() {
  return (
    <>
      <GoogleAnalytics />
      <WebVitals />
    </>
  );
}