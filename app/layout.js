import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest:'manifest.webmanifest',
  title: {
    template: '%s | Gulfam saifi || gulfaam saifi || gscoder',
    default: 'Gulfam saifi || gulfaam saifi,gscoder', // a default is required when creating a template
  },
  description: 'Discover gscoder unequaled  design mastery at Gulfam saifi || gulfaam saifi , gulfam saifi web developer , gulfaam, ',
  
  metadataBase: new URL('https://gsserver.netlify.app'),
  generator: ' Gulfam saifi || gulfaam saifi, gscoder',
  applicationName: ' Gulfam saifi || gulfaam saifi, gscoder',
  referrer: 'origin-when-cross-origin',
  keywords: ['gulfaam saifi','coding', 'gulfaam','gccoder', 'gulfaam saifi','gulfam software engineer', 'gulfam web developer', 'gscoder','gs coder', 'gulfaam dadri', 'gulfam dadri','gulfam saifi dadri','gulfam developer'],
  authors: [{ name: 'gulfam saifi || gulfaam saifi, gscoder', url:'https://gsserver.netlify.app' }, { name: 'gulfam saifi', url: 'https://gulfaam.com' }],
  creator: 'gulfam saifi',
  publisher: 'gulfam saifi || gulfaam saifi,gscoder ',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [{ url: '/favicon.ico' }, new URL('/favicon.ico', 'https://gsserver.netlify.app')],
    shortcut: ['/shortcut-icon.png'],
    apple: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/favicon.ico',
      },
    ],
  },

  verification: {
    google: 'google-site-verification=AQHLaKAB2ryOzq5Pqukw8U-hmLV-esdO6SGvn2t__WE',
    other: {
      me: ['my-email', 'my-link'],
    },
  },

  alternates: {
    canonical: '/addTopic',
  },
  openGraph: {
    title:'Gulfam saifi || gulfaam saifi || gscoder',
    description: ' Gulfam saifi || gulfaam saifi , gscoder, Discover  unequaled  design mastery at Gulfam saifi || gulfaam saifi – where invention meets complication. Elevate your space with bespoke innards that  review luxury and reflect your unique style. aplusstudio noida',
  
    images: [{
      url: '/boy.png',
      width: 400,
      height: 300,
    }]
  },
  


}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="max-w-3xl mx-auto p-4">
          <Navbar />
          <div className="mt-8">{children}</div>
        </div>
      </body>
    </html>
  );
}
