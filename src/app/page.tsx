'use client'
import Top from "./sections/Top";
import Me from "./sections/Me";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Link from "next/link";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export default function Home() {
  return (
    <main className="flex flex-col w-full justify-center items-center">
      <Top/>
      <Me/>
      <Stack/>
      <Projects/>
      <Contact/>
      <Link href='/' className="cont mb-10 px-3 py-1 text-xs"><KeyboardArrowUpIcon className="mr-1 -ml-1"/>Volver arriba</Link>
    </main>
  )
}
