import "./globals.css";
import CnnFooter from "@/components/cnn/CnnFooter";
import CnnNavbar from "@/components/cnn/CnnNavbar";
import { Inter, Sora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body"
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-display"
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio site powered by Next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${sora.variable} flex min-h-screen flex-col`}>
        <CnnNavbar />
        <div className="flex-1">{children}</div>
        <CnnFooter />
      </body>
    </html>
  );
}
