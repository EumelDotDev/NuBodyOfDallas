import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "nubodyofdallas.com";
  const forwardedProtocol = requestHeaders.get("x-forwarded-proto");
  const protocol = forwardedProtocol === "http" ? "http" : "https";
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Nu Body of Dallas | Laser & Aesthetic Care",
    description:
      "Personalized laser hair removal, skin treatments and aesthetic care in Dallas, Texas. Request a complimentary consultation.",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      title: "Nu Body of Dallas | Confidence, Refined.",
      description:
        "Advanced laser and aesthetic treatments, considered around your skin and your goals.",
      type: "website",
      locale: "en_US",
      siteName: "Nu Body of Dallas",
      images: [
        {
          url: `${origin}/og.png`,
          width: 1200,
          height: 630,
          alt: "Nu Body of Dallas — Confidence, refined.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Nu Body of Dallas | Confidence, Refined.",
      description: "Personalized laser and aesthetic care in Dallas, Texas.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
