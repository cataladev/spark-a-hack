import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {};

import { Noto_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { HydrateClient } from "~/trpc/server";

// If loading a variable font, you don't need to specify the font weight
const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={notoSans.className}>
      <body>
        <ClerkProvider>
          <TRPCReactProvider>
            <HydrateClient>
            {children}
            </HydrateClient>
          </TRPCReactProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
