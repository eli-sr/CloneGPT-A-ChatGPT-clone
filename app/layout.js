import { Inter } from 'next/font/google'
import './globals.css'
import Aside from './components/Aside.js'
import Header from './components/Header'
import ChatBar from './components/ChatBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.className} flex w-full h-screen`}>
        <Aside />
        <div className='flex flex-col grow'>
          <Header />
          <main className='flex items-center justify-center grow'>
            <div className='flex flex-col w-full h-full lg:max-w-2xl xl:max-w-3xl'>
              {children}
              <ChatBar />
            </div>
          </main>
        </div>
      </body>
    </html>
  )
}
