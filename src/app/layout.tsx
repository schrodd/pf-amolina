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
      <body className={`${inter.className} bg-gradient-to-tr from-slate-800 to-slate-600 bg-fixed text-white`}>
        {children}
      </body>
    </html>
  )
}
