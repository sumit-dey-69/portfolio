import Navbar from "@/components/navbar";
import "@/utils/font";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sumit.Dev",
  description: "A portfolio website created by Sumit Dey",
  icons: {
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "bg-neutral-50 text-white font-roboto-mono antialiased overflow-x-hidden grid grid-rows-[auto_1fr] min-h-screen px-5"
        }
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
