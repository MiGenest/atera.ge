import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ATERA – ინოვაციური IT გადაწყვეტები",
  description: "ATERA გთავაზობთ საინფორმაციო ტექნოლოგიების სრული სპექტრის გადაწყვეტილებებსა და სერვისებს.",
  icons: {
    icon: "/favicon.ico",    // დარწმუნდით რომ favicon.ico განათავსეთ public კატალოგში
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ka">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}