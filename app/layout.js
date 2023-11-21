import { Inter } from 'next/font/google'
import './globals.css'
import Header from '../component/Header&Footer/Header'
import Footer from '../component/Header&Footer/Footer'
import Whatsapp from '../component/Whatsapp/Whatsapp'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SEHAT',
  description: 'Your way to Wellness',
  name: "viewport",
  content: "width=device-width, user-scalable=no"
}


export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={inter.className}>
      <Header></Header>
      {children}
      <Footer></Footer>
      </body>
      {/* <Whatsapp /> */}
      
    </html>
  )
}
