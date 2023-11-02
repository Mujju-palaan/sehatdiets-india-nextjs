import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../component/Header&Footer/Header'
import Footer from '../component/Header&Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SEHAT',
  description: 'This website is designed by Mujju',
}

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
      <Header></Header>
      {children}
      <Footer></Footer>
      </body>
    </html>
  )
}
