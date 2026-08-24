import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://miaochuan-fan-portfolio.miaochuan89.chatgpt.site'),
  title: 'Miaochuan Fan — Spatial / Environment Designer',
  description: 'Architecture-trained spatial and environment designer working across real-time worlds, experiential design and AI-assisted visual development.',
  openGraph: {
    title: 'Miaochuan Fan — Spatial / Environment Designer',
    description: 'Architecture-trained spatial designer working across real-time worlds, experiential design and AI-assisted visual development.',
    images: [{ url: '/og.png', width: 1664, height: 936, alt: 'Miaochuan Fan portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miaochuan Fan — Spatial / Environment Designer',
    description: 'Architecture-trained spatial designer working across real-time worlds, experiential design and AI-assisted visual development.',
    images: ['/og.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
