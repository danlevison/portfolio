import './globals.css'
import { Montserrat } from 'next/font/google'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import Providers from "./themeProvider"

const montserrat = Montserrat({ 
  subsets: ["latin"], 
  variable: "--font-montserrat"
})

export const metadata = {
  title: 'Dan Levison | Front-End Developer ',
  description: 'Dan Levison Front-End Developer Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} font-mont`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
