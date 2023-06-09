import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import AppHeader from "../layout/app-header";
import AppFooter from "../layout/app-footer";

export const metadata = {
  title: "Pixel Up",
  description: "Service based web agency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
