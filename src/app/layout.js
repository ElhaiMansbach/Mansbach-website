import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/containers/header";
import Footer from "@/containers/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir={"rtl"}>
      <body
        className="site-body"
        style={{ margin: 0, padding: 0, overflowX: "hidden" , boxSizing: "border-box"}}
      >
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
