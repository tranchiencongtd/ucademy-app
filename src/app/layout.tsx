import Providers from "@/components/Providers";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import Script from "next/script";
import "prismjs/themes/prism.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.scss";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://toanthaycong.com"),
  title: "Toán Thầy Công - Học trực tuyến",
  description:
    "Nền tảng học toán trực tuyến với các khóa học từ cơ bản đến nâng cao.. Được phát triển và xây dựng bởi Thầy Trần Chiến Công.",
  keywords:
    "toanthaycong, học toán thcs, toán thcs, Toán Thầy Công, khóa học toán, học toán online",
  applicationName: "toanthaycong",
  openGraph: {
    title: "Toán thầy Công - Học trực tuyến",
    description:
      "Nền tảng học toán trực tuyến với các khóa học từ cơ bản đến nâng cao.",
    images: ["/seo-cover.jpg"],
  },
  other: {
    "google-site-verification": "jVBTbT71E76dExUgIo5fpClsPpHqU47POlZ4EUuB2rM",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${manrope.className}`}>
          <div className="wrapper relative">
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Providers>{children}</Providers>
            </ThemeProvider>
          </div>
          <ToastContainer
            autoClose={1500}
            position="top-right"
          ></ToastContainer>
          <Script
            id="mux-uploader"
            src="https://cdn.jsdelivr.net/npm/@mux/mux-uploader@1.0.0-beta.6"
          ></Script>
          <SpeedInsights></SpeedInsights>
          <Analytics></Analytics>
        </body>
      </html>
    </ClerkProvider>
  );
}
