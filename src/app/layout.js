import "./globals.css";
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
});

export const metadata = {
  title: "Fitness offer",
  description: "Успейте оформить выгодный тариф",
};

export default function RootLayout({ children }) {
  return (
      <html lang="ru" className="h-full">
      <body className={`${montserrat.className} min-h-full w-full`}>
      {children}
      </body>
      </html>
  );
}
