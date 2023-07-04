"use client"
import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'
import HomeIcon from '@mui/icons-material/Home';

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
        <header className="items-center justify-between m-5 py-1 px-5 cont fixed top-0 left-0 gap-5 z-50 hidden md:flex">
          <Link href='/' className='text-3xl font-bold'><HomeIcon className='-mt-1'/></Link>
          <ul className='flex gap-5 font-light text-sm tracking-wide [&>*]:transition'>
            <li><Link href='#me'>Sobre mí</Link></li>
            <li><Link href='#stack'>Mi Stack</Link></li>
            <li><Link href='#projects'>Proyectos</Link></li>
            <li><Link href='#contact'>Contacto</Link></li>
          </ul>
        </header>
        {children}
      </body>
    </html>
  )
}
