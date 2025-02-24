import localFont from "next/font/local";
import "./globals.css";
import TranslationProvider from "./translationProvider";
import { GlobalStateProvider } from "./GlobalStateContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({ children }) {


  return (
    <GlobalStateProvider>
    <TranslationProvider>
    <html lang="en">
       <head>
       <title>Medikaray - Your Trusted Healthcare Solution</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="description" content="Medikaray provides advanced healthcare solutions tailored to your needs. Explore our innovative services today!" />
        <meta name="keywords" content="Medikaray, healthcare, medical services, health solutions" />
        <meta name="author" content="Medikaray" />
        <meta property="og:title" content="Medikaray - Your Trusted Healthcare Solution" />
        <meta property="og:description" content="Medikaray provides advanced healthcare solutions tailored to your needs. Explore our innovative services today!" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>

  
    </html>
    </TranslationProvider>
    </GlobalStateProvider>

  );
}
