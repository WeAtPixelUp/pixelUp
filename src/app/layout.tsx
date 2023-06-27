"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import AppHeader from "../layout/app-header";
import AppFooter from "../layout/app-footer";
import { useEffect } from "react";

export const metadata = {
  title:
    "PixelUp: Stunning Web Design, Development and Marketing Services for Businesses Worldwide",
  description:
    "We offer development of web pages with stunning design and crafting effective marketing strategies to help businesses succeed.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
