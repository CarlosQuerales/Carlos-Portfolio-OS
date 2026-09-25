import { Space_Grotesk, IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { buildMetadata } from '@/lib/seo';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/constants';

const heading = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

const body = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata = {
  ...buildMetadata({
    title: SITE_NAME,
    description: SITE_TAGLINE,
  }),
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml', sizes: 'any' }],
    shortcut: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col antialiased">
        <SkipToContent />
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
