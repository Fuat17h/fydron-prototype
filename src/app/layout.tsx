import { FluentRegistry } from "@/lib/FluentRegistry";
import "./globals.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body style={{ margin: 0, padding: 0, backgroundColor: "#f4f5f7" }}>
        <FluentRegistry>{children}</FluentRegistry>
      </body>
    </html>
  );
}
