"use client"
import Image from "next/image"
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from "next/link";

export default function Projects(){
  const projects = [
    {
      img: ['/touch.png','/touch2.png',],
      title: 'Touch - Website',
      link: 'https://www.touchandgrow.com.ar/',
      text: 'Sitio web corporativo para agencia de marketing digital. Posee animaciones, páginas por tipo de servicio y formulario de contacto.'
    },
    {
      img: ['/aiwa.png','/aiwa2.png',],
      title: 'Aiwa Electronics - Website',
      link: 'https://www.aiwaelectronics.com.ar/',
      text: 'Hecho con NextJS SSG, genera automáticamente las páginas de acuerdo a los productos que se cargan en la base de datos. Posee un visor 360º para la mayoría de los productos, desarrollado desde cero.'
    },
    {
      img: ['/araser.png','/araser2.png',],
      title: 'Araser SRL - Website',
      link: 'https://arasersrl.com/',
      text: 'Sitio web corporativo para agencia de proyectos edilicios. Long page con animaciones, varios sliders, contenido dinámico, secciones por servicio y formulario de contacto.'
    },
    {
      img: ['/fastpass.png','/fastpass2.png',],
      title: 'Fast Pass - Web App',
      link: 'https://github.com/schrodd/fast-pass',
      text: 'Aplicación web para facilitar la compra de comida para llevar. Proyecto en curso, tanto frontend con NextJS + Tailwind como backend con NestJS + SocketIO.'
    },
  ]
  return (
    <section id='projects' className="w-screen md:w-3/4 flex flex-col items-center gap-5 pt-5">
      <h3>Proyectos</h3>
      <div className="m-5 mt-0 md:m-0 flex flex-wrap justify-center gap-5 mb-10">
        {projects.map((e,i) => (
          <div key={i} className="cont p-5 text-sm font-extralight flex flex-col flex-grow w-full md:w-1/3 gap-3">
            <Link href={e.link} target="_blank" rel='noopener' className="w-auto h-[150px] md:h-[200px] relative">
              <Image src={e.img[0]} alt='project image' className="img-border object-cover object-left" fill/>
              <Image src={e.img[1]} alt='project image' className="img-border object-cover object-left toggle" fill/>
            </Link>
            <Link href={e.link} target="_blank" rel='noopener'><h4 className="mt-1 font-medium">{e.title}<OpenInNewIcon fontSize="small" className="ml-1"/></h4></Link>
            <p className=''>{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}