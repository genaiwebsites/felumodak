import { Cormorant_Garamond, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-barlow-condensed",
});

export const metadata = {
  title: "Felumodak — Heritage Bengali Sweets since 1860",
  description: "Experience five generations of sacred sweetcraft from Rishra, Hooghly, West Bengal. Order traditional mishti, freshly crafted and delivered across India.",
  keywords: "Felu Modak, Felumodak, Rishra, Bengali Sweets, Mishti Doi, Rasgulla, Sandesh, traditional sweets, buy sweets online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}

