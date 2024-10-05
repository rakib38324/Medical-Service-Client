import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./Components/navbar";
import Footer from "./Components/footer";
import { Toaster } from "react-hot-toast";
import Chatting from "./Components/common/chating";
import { ChatProvider } from "./Hooks/ChatContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Medicale",
  description: "This is a medicale service website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  dark:bg-defaultDark md:p-2`}
      >
        <ChatProvider>
          <Toaster />
          <Chatting />
          <Navbar />
          {children}
          <Footer />
        </ChatProvider>
      </body>
    </html>
  );
}
