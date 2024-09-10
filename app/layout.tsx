'use client';
import useDetectLanguage from './components/DetectLanguage';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useDetectLanguage();

  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
