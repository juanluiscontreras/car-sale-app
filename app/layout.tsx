'use client';
import './globals.css';
import './i18n'; // Import i18n configuration

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
