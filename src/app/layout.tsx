import { FluentRegistry } from "@/lib/FluentRegistry";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <FluentRegistry>{children}</FluentRegistry>
      </body>
    </html>
  );
}
