import "./globals.css";
import { Montserrat } from "next/font/google";

import ApolloClientProvider from "@/shopify/storeFront.apollo.client";
import { Analytics } from "@vercel/analytics/react";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--montserrat" });

export const metadata = {
  title: "Example Page",
  description: "This is an example page",
  themeColor: "black",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable}`}>
      <ApolloClientProvider>
        <body>
          {children}
          <Analytics />
        </body>
      </ApolloClientProvider>
    </html>
  );
}
