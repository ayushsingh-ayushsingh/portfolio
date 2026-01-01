import type { Metadata } from "next";
import { Montserrat as CustomFont } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import "./globals.css";

// import { Geist, Geist_Mono } from "next/font/google";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const customFont = CustomFont({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ayush Singh - Full-Stack Developer",
  description: "Full-Stack Web Developer from Bhopal, India.",
  applicationName: "Ayush Singh - Full-Stack Developer",
  keywords:
    "Portfolio Ayush Singh Ayush AyushSingh ayush singh ayushsingh-ayushsingh",
  category: "Portfolio",
  authors: [{ name: "Ayush Singh", url: "https://me.ayushpno.workers.dev/" }],
  openGraph: {
    type: "profile",
    title: "Ayush Singh - Full-Stack Developer",
    description: "Full-Stack Web Developer from Bhopal, India.",
    siteName: "Ayush Singh - Full-Stack Developer",
    url: "https://me.ayushpno.workers.dev/",
    images: [
      {
        url: "https://me.ayushpno.workers.dev/ogImage.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" type="favicon" href="/favicon.ico" />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${customFont.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          disableTransitionOnChange
          // enableSystem
        >
          {children}
          <Toaster className="dark:invert-95 select-none" />
        </ThemeProvider>
      </body>
    </html>
  );
}
