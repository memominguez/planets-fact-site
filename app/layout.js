import { Antonio, League_Spartan } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const antonio_init = Antonio({ 
  subsets: ["latin"],
  weigth: ['400', '500'],
  variable: '--font-antonio'
});

const league_spartan_init = League_Spartan({
  subsets: ["latin"],
  weigth: ['400', '700'],
  variable: '--font-league_spartan'
})

// https://www.youtube.com/watch?v=tvHLTUHnPqY&t=8s

export const metadata = {
  title: "Planets Fact",
  description: "Planets properties",
  icons: {
    icon: [
      '/favicon.ico?v=1',
    ],
    apple: [
      '/apple-touch-icon.png?v=4',
    ],
    shortcut: [
      '/apple-touch-icon.png',
    ]
  },
  manifest: '/site.webmanifest'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${antonio_init.variable} ${league_spartan_init.variable}` }>
        <Navbar />
        <main>
        {children}
        </main>
        </body>
    </html>
  );
}
