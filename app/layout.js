import "./globals.css";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

export const metadata = {
  title: "The Connecter - Unlocking Crypto for Everyday People",
  description: "The Connecter - Unlocking Crypto for Everyday People",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
