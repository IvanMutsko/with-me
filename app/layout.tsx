import { Inter, Montserrat } from "next/font/google";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"], weight: ["400", "600"] });
const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  weight: ["800", "700", "400"],
});

export const metadata = {
  title: "With Me",
  description: "With Me",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.className} ${montserrat.className}`}>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
