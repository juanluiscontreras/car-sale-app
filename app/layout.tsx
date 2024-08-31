import '../globals.css';

export const metadata = {
  title: 'Car Sale App',
  description: 'A simple app for selling a car',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
