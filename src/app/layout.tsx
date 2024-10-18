import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "@/assets/styles/globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Providers } from "@/components/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookit App | Book a Room",
  description: "Book a meeting or conference room for your team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👑</text></svg>"
        />
      </head>
      <body className={`${inter.className} h-dvh`}>
        <Providers>
          <Header />
          <main className="mx-auto h-screen max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
