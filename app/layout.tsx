import type { Metadata } from "next";
import { SUSE } from "next/font/google";
import "@/style/index.css";

const suse = SUSE({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ariel Spencer",
  description: "Fullstack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${suse.className} min-h-screen bg-b-primary text-t-main`}
    >
      <body>{children}</body>
    </html>
  );
}
