import './globals.css';
import { ReactNode } from 'react';
import Nav from './components/navBar';

export const metadata = {
  title: "Personal Resume Website",
  description: 'A simple one-page resume of Almas Kanwal',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <div className="container">
          {children}
        </div>
      </body>
    </html>
  );
}
