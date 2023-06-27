"use client";
import { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";
import AppHeader from "../layout/app-header";
import AppFooter from "../layout/app-footer";

export const metadata: Metadata = {
  title: "Pixel Up",
  description: "Service based web agency",
};

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
      <body>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
