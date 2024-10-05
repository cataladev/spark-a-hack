import "~/styles/globals.css";

import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {};

import { Noto_Sans } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { HydrateClient } from "~/trpc/server";
import { dark } from "@clerk/themes";

// If loading a variable font, you don't need to specify the font weight
const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
    <html lang="en" className={notoSans.className}>
      <body>
        
          <TRPCReactProvider>
            <HydrateClient>
            {children}
            </HydrateClient>
          </TRPCReactProvider>
        
      </body>
    </html>
    </ClerkProvider>
  );
}
