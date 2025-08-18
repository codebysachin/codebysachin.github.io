import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sachin Gupta - Full Stack Developer",
  description: "Full-stack developer specializing in JavaScript, TypeScript, Java, and Kotlin. Independent consultant delivering tailored software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black font-mono antialiased">
        {children}
      </body>
    </html>
  );
}