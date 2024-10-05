import "~/styles/globals.css";


import { type Metadata } from "next";

import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
 
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="body">
        <TRPCReactProvider>{children}
        lalala
        </TRPCReactProvider>
      </body>
    </html>
  );
}

