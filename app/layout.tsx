import type { Metadata } from "next";
import "./globals.css";
import { OrganizationSchema } from "./components/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourdomain.com"),
  title: {
    default: "Your Brand Name | Web Solutions in Nigeria",
    template: "%s | Your Brand Name",
  },
  description:
    "Professional web development and digital solutions company in Nigeria specializing in high-performance Next.js applications.",
  applicationName: "Your Brand Name",
  keywords: [
    "Next.js Developer Nigeria",
    "Web Development Nigeria",
    "Frontend Engineer Nigeria",
    "Digital Solutions Lagos",
  ],
  authors: [{ name: "Your Brand Name" }],
  creator: "Your Brand Name",
  publisher: "Your Brand Name",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://yourdomain.com",
    siteName: "Your Brand Name",
    title: "Your Brand Name",
    description:
      "Professional web development and digital solutions company in Nigeria.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Brand Name",
    description:
      "Professional web development and digital solutions company in Nigeria.",
  },
  alternates: {
    canonical: "/",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white font-sans antialiased text-gray-900">
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}
