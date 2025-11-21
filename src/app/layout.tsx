import type { Metadata } from "next";
import { Lato, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Lato for headings
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-lato",
  display: "swap",
});

// JetBrains Mono for monospace sections
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | UNIBEN Journal of Science, Technology and Innovation",
    default: "UNIBEN Journal of Science, Technology and Innovation",
  },
  description:
    "The UNIBEN Journal of Science, Technology and Innovation publishes peer‑reviewed research and scholarship across science, technology, engineering, and innovation with African and global perspectives.",
  keywords: [
    "UNIBEN",
    "Science",
    "Technology",
    "Innovation",
    "Engineering",
    "Computer Science",
    "Health Sciences",
    "Environmental Science",
    "Research",
    "Peer Review",
    "Open Access",
    "African Scholarship",
    "STI Policy",
  ],
  openGraph: {
    title: "UNIBEN Journal of Science, Technology and Innovation",
    description:
      "Peer‑reviewed research and scholarship with African and global perspectives in science, technology, engineering, and innovation.",
    url: "https://ubjsti.org",
    siteName: "UNIBEN Journal of Science, Technology and Innovation",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
