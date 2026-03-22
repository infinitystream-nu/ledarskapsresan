import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geist = Geist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ledarskapsresan",
  description: "Från kollega till ledare",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv">
      <body className={geist.className}>
        <Script id="scroll-restoration" strategy="beforeInteractive">
          {`window.history.scrollRestoration = 'manual'; window.scrollTo(0, 0);`}
        </Script>
        {children}
      </body>
    </html>
  );
}