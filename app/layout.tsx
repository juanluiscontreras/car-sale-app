'use client';
import useDetectLanguage from './components/DetectLanguage';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useDetectLanguage();

  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
