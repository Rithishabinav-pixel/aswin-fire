import { Manrope, Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import { company } from "@/data/company";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.aswinfire.in"),
  title: {
    default: `${company.shortName} | Fire Protection Engineering, Chennai`,
    template: `%s | ${company.shortName}`,
  },
  description:
    "Design, installation and AMC of fire hydrant, sprinkler, fire alarm, MVWS and gas suppression systems for hospitals, industry and commercial buildings across South India.",
  keywords: [
    "fire protection company Chennai",
    "fire hydrant system",
    "fire sprinkler system",
    "fire alarm system",
    "gas suppression system",
    "AMC fire fighting",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: `${company.legalName}`,
    title: `${company.shortName} | Fire Protection Engineering, Chennai`,
    description:
      "End-to-end fire protection engineering for hospitals, industry and critical infrastructure across South India.",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
