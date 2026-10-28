import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactSection from "@/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Ethernode to discuss web development, software engineering, graphic design, corporate identity design, and systems integration for your business.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Ethernode | Let's Discuss Your Project",
    description:
      "Get in touch with Ethernode to discuss your next digital project, website, software solution, or design requirements.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ethernode | Let's Discuss Your Project",
    description:
      "Discuss your next web development, software engineering, design, or IT project with Ethernode.",
  },
};

export default function ContactPage() {
  return (
    <section id="contact">
        <div className="hero">
            <Nav />
            <h1 className="site-heading">Contact</h1>
        </div>
        <ContactSection />
        <Footer />
    </section>
  );
}