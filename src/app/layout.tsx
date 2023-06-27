"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AppHeader from "../layout/app-header";
import AppFooter from "../layout/app-footer";
import Head from "next/head";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  }, []);

  return (
    <html lang="en">
      <Head>
        <title>Pixel Up</title>
      </Head>
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
