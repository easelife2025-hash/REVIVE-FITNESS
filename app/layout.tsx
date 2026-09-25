import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'REVIVE FITNESS | Train Strong. Live Stronger | Seawoods, Navi Mumbai',
  description: 'Train Strong. Live Stronger. Premium modern gym in Seawoods West, Navi Mumbai. Specializing in CrossFit, Cycling, Weight Training, Personal Training, and Nutrition Consulting. Rated 4.9★ by 192+ members.',
  openGraph: {
    title: 'REVIVE FITNESS | Train Strong. Live Stronger | Seawoods, Navi Mumbai',
    description: 'Premier fitness destination in Seawoods West near Grand Central Mall. CrossFit, Weight Training, Indoor Cycling, Nutrition Consulting & Personal Training. 4.9★ rating.',
    type: 'website',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'REVIVE FITNESS | Seawoods, Navi Mumbai',
    description: 'Train Strong. Live Stronger. Premium fitness & strength center in Seawoods West.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="scroll-smooth bg-zinc-950 text-zinc-100 antialiased selection:bg-amber-400 selection:text-zinc-950">
      <body suppressHydrationWarning className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
