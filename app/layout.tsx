'use client';
import useDetectLanguage from './components/DetectLanguage';
import './globals.css';
import { GoogleTagManager } from '@next/third-parties/google'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  useDetectLanguage();

  return (
    <html lang="es">
      <GoogleTagManager gtmId="GTM-N7CH3GQQ" />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
