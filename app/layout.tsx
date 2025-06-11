import './globals.css';
import { ReactNode } from 'react';
import Navbar from './components/Navbar';

export const metadata = {
  title: 'My Website',
  description: 'A cool Next.js app',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
