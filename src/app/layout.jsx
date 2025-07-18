import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/componets/home/navbar";
import Footer from "@/componets/home/footer";
import WhatsAppButton from "@/componets/home/whatsapp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MAF ITI",
  description: "",
  icons:{
    icon:'/favicon.ico'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <WhatsAppButton/>
        <Footer/>
      </body>
    </html>
  );
}
