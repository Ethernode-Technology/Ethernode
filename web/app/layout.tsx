import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toast"
import "./globals.css";
import StructuredData from "./structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
    metadataBase: new URL("https://ethernode.tech"),

    title: {
        default:
            "Ethernode - Web Development, Software Engineering, Graphic Design, Security Systems, & IT Solutions",
        template: "%s | Ethernode",
    },

    description:
        "Ethernode i a startup IT Company based in Johannesburg, South Africa delivering  the best web development, software engineering, graphic design, corporate identity design, and systems integration solutions for businesses.",

    applicationName: "Ethernode",

    openGraph: {
        type: "website",
        url: "https://ethernode.tech/",
        siteName: "Ethernode",
        title:
            "Ethernode - Web Development, Software Engineering, Graphic Design, Security Systems, & IT Solutions",
        description:
            "Web development, software engineering, graphic design, and integrated IT solutions for businesses.",
        locale: "en_ZA",
    },

    twitter: {
        card: "summary_large_image",
        title: "Ethernode | Web Development & IT Solutions",
        description:
            "Web development, software engineering, graphic design, and systems integration for businesses.",
    },

    robots: {
        index: true,
        follow: true,
    },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
