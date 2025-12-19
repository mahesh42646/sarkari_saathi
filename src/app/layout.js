import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import BootstrapClient from './components/BootstrapClient';

export const metadata = {
  title: 'sarkari-sathi',
  description: 'Next.js app with Bootstrap',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
