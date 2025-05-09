import Navbar from "@/components/navbar/navbar";
import StairTransition from "@/components/transition/stair-transition";
import "@/utils/font";
import type { Metadata } from "next";
import { Roboto_Mono, Tourney } from "next/font/google";
import "./globals.css";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
  style: "normal",
  variable: "--font-roboto-mono",
});

const tourney = Tourney({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  style: "normal",
  variable: "--font-tourney",
});

export const metadata: Metadata = {
  title: "Sumit.Dev",
  description: "A portfolio website created by Sumit Dey",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-50 text-white font-roboto-mono antialiased overflow-x-hidden min-h-screen px-5 overflow-y-scroll no-scrollbar ${tourney.variable} ${roboto_mono.variable}`}
      >
        <div className="grid grid-rows-[auto_1fr] min-h-screen">
          <Navbar />
          <div className="grid grid-rows-[1fr_auto] h-resize">
            <StairTransition />
            <div className="min-h-[calc(100vh-5rem)] max-md:pb-5 md:py-10">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
