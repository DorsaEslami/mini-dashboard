import localFont from "next/font/local";

export const aradFont = localFont({
  src: [
    {
      path: "../fonts/Arad-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../fonts/Arad-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../fonts/Arad-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/Arad-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Arad-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Arad-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Arad-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Arad-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/Arad-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-arad",
});