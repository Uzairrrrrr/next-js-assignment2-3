import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Profile Section',
  description: 'Next.js Profile Section with Header and Footer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className='header'>
          <nav>
            <ul>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
