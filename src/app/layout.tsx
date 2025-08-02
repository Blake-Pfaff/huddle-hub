// src/app/layout.tsx
import "./globals.css"; // ← this is critical

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
// Note: Ensure that Tailwind CSS is properly configured in your project
