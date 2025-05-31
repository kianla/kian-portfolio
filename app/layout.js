import { DM_Sans, Inter } from "next/font/google";
import Preloader from "@/layout/Preloader";

import "@css/animate.min.css";
import "@css/bootstrap.min.css";
import "@css/flaticon.min.css";
import "@css/fontawesome-5.14.0.min.css";
import "@css/nice-select.min.css";
import "@css/slick.min.css";
import "@css/style.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-inter",
  display: "swap",
});

const dm_sans = DM_Sans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-dm_sans",
  display: "swap",
});

const fontFamily = `${inter.variable} ${dm_sans.variable}`;

export const metadata = {
  title: {
    template: "Kian Laghaei • %s",
    default: "Kian Laghaei • Home",
  },
  description: "Explore the mind. Build the future. | Kian Laghaei Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={fontFamily}>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
