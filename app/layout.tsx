import type { Metadata } from "next";
import {Poppins} from "next/font/google";
import {  ClerkProvider,
  SignedIn,
  SignedOut } from "@clerk/nextjs";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Helpie coach",
  description: "Automated immigration and relocation support tools and services",
  icons : {
    icon: '/assets/images/Svg_logo_gray.svg',
  }
};

  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ClerkProvider>
        <html lang="en">
          <body>
            {children}
          </body>
        </html>
      </ClerkProvider>
    );
  }
