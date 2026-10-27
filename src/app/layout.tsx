import type { Metadata, Viewport } from "next";
import { Syne, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#121110",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sujalahar.tech"),
  alternates: {
    canonical: "https://sujalahar.tech",
  },
  title: "Sujal Ahar | Software Developer & AI Systems Engineer",
  description:
    "Personal portfolio of Sujal Ahar — Full-stack developer and AI systems engineer studying at NIT Raipur. Specializing in high-performance backends, code intelligence, and competitive programming.",
  keywords: [
    "Sujal Ahar",
    "Software Developer",
    "Full-Stack Engineer",
    "AI Systems",
    "NIT Raipur",
    "SystemLens",
    "Invox",
    "VAULT Armor",
    "Competitive Programming",
  ],
  authors: [{ name: "Sujal Ahar", url: "https://github.com/SuJal-Ahar" }],
  creator: "Sujal Ahar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sujalahar.tech",
    title: "Sujal Ahar — Software Developer & AI Systems Engineer",
    description:
      "Building software that solves real problems. Full-stack engineering, AI platforms, and algorithmic systems.",
    siteName: "Sujal Ahar Portfolio",
    images: [
      {
        url: "/assets/sujal-profile.png",
        width: 1200,
        height: 630,
        alt: "Sujal Ahar Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sujal Ahar | Software Developer & AI Systems Engineer",
    description:
      "Building software that solves real problems. Full-stack engineering, AI platforms, and algorithmic systems.",
    images: ["/assets/sujal-profile.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
    >
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className="bg-[#121110] text-[#FFFFFF] font-sans min-h-screen selection:bg-[#FF713B] selection:text-white antialiased">
        {children}
      </body>
    </html>
  );
}
