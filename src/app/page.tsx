'use client'
import Top from "./sections/Top";
import Me from "./sections/Me";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Link from "next/link";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeIcon from '@mui/icons-material/Home';
import Certificates from "./sections/Certificates";
import { useEffect } from "react";
import Downnloads from "./sections/Downloads";

export default function Home() {
  function scrollTop() {
    if (window)
    window.scrollTo(0,0)
  }

  useEffect(() => {
    const bg: HTMLElement | null = document.getElementById('bg')
    if (bg) {
      window.addEventListener('scroll', () => {
        bg.style.backgroundPositionY = (-window.scrollY/6).toString()+'px'
      })
    }
  }, [])

  return (
    <>
      <header className="items-center justify-between m-5 py-1 px-5 cont fixed top-0 left-0 gap-5 z-50 hidden md:flex">
        <Link href='/' onClick={scrollTop} className='text-3xl font-bold'><HomeIcon className='-mt-1'/></Link>
        <ul className='flex gap-5 font-light text-sm tracking-wide [&>*]:transition'>
          <li><Link href='#me'>Sobre mí</Link></li>
          <li><Link href='#stack'>Mi Stack</Link></li>
          <li><Link href='#projects'>Proyectos</Link></li>
          <li><Link href='#certificates'>Certificados</Link></li>
          <li><Link href='#contact'>Contacto</Link></li>
        </ul>
      </header>
      <main className="flex flex-col w-full justify-center items-center">
        <Top/>
        <Me/>
        <Stack/>
        <Projects/>
        <Certificates/>
        <Downnloads/>
        <Contact/>
        <Link href='/' onClick={scrollTop} className="cont mb-10 px-3 py-1 text-xs"><KeyboardArrowUpIcon className="mr-1 -ml-1"/>Volver arriba</Link>
      </main>
    </>
  )
}
