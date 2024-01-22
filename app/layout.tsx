import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "To-Do App",
  description: "Simple to-do app to learn crud operations in NextJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
