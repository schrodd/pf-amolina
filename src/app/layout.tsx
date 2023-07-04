import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrés Molina - Desarrollador Frontend',
  description: 'Andrés Molina - Desarrollador Frontend',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} text-white`}>
        <div id='bg'></div>
        {children}
      </body>
    </html>
  )
}
