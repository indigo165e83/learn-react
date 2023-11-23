import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn React',
  description: 'This site is a site where the examples described on the official React website are tested for better understanding.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col m-3">
          {children}
        </div>
      </body>
    </html>
  )
}
