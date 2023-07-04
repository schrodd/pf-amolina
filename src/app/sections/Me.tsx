'use client'
import CodeIcon from '@mui/icons-material/Code';
import ConstructionIcon from '@mui/icons-material/Construction';
import DevicesIcon from '@mui/icons-material/Devices';
import VerifiedIcon from '@mui/icons-material/Verified';

export default function Me(){
  const me = [
    {icon: CodeIcon, text: 'Desarrollador Frontend con más de 3 años de experiencia, apasionado por crear interfaces de usuario atractivas y experiencias fluidas. Actualmente explorando el mundo del desarrollo Backend.'},
    {icon: ConstructionIcon, text: 'Experto en tecnologías web, especializado en React con NextJS, además de varias herramientas y librerías (Typescript, Git, Framer Motion, Tailwind, SASS, etc). Capaz de optimizar sitios web en términos de rendimiento, SEO y accesibilidad.'},
    {icon: DevicesIcon, text: 'Soy capaz de crear páginas web y aplicaciones web responsive y optimizadas para dispositivos móviles. Desarrollo código de alta calidad y colaboro de manera efectiva en equipos multidisciplinarios.'},
    {icon: VerifiedIcon, text: 'Comprometido con el aprendizaje continuo y estar al día con las últimas tendencias y mejores prácticas de frontend. Me emociona poder contribuir con mis habilidades y experiencia para crear soluciones web impactantes.'}
  ]
  return (
    <section id='me' className="w-3/4 flex flex-col items-center pb-10 pt-5">
      <h3 className="mb-5">Sobre mí</h3>
      <div className="flex flex-wrap justify-center gap-5 mb-5">
        {me.map((e,i) => (
          <div key={i} className="cont p-5 text-sm font-extralight flex flex-col items-center flex-grow md:w-1/3">
            <e.icon className="mb-2 w-16 h-16"/>
            <p className='text-center'>{e.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}