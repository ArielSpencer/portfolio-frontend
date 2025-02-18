import { SUSE } from "next/font/google";
import "@/style/index.css";

const suse = SUSE({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${suse.className} min-h-screen bg-b-primary text-t-main p-4`}
    >
      <h1>Public</h1>
      {children}
    </div>
  );
}
