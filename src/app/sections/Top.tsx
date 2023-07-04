'use client'
import Image from "next/image"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Top(){
  const tags = ['React','Typescript','Javascript/ES6','NextJS','MaterialUI','Framer Motion','Tailwind','Sass','+']
  return (
    <section className="flex flex-col md:flex-row md:w-2/3 h-auto md:h-screen items-center relative">
      <div className="flex-1 md:w-1/2 p-5 md:p-0 relative z-10 text-center md:text-left mt-10 md:mt-0">
        <h1>Andrés Molina</h1>
        <h2 className="text-lg md:text-3xl mb-5">Desarrollador Frontend</h2>
        <div id='tags' className="flex gap-2 mt-2 flex-wrap md:pr-10 justify-center md:justify-start">
          {tags.map((e,i) => <p key={i} className="tag">{e}</p>)}
        </div>
      </div>
      <div className="relative md:flex-1 h-72 md:h-full w-screen md:w-auto flex justify-center items-center -order-1 md:order-1
      mt-20 md:mt-5">
        <div className="round w-[70vw] h-[70vw] md:w-[32vw] md:h-[32vw] absolute"></div>
        <Image src='/ilus.svg' alt='illustration' fill className="drop-shadow-xl"/>
      </div>
      <KeyboardArrowDownIcon className="md:absolute md:bottom-10 md:-mr-3 right-1/2 animate-bounce w-12 h-12"/>
    </section>
  )
}