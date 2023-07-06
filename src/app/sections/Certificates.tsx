'use client'
import Link from "next/link"
import DownloadIcon from '@mui/icons-material/Download';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Certificates(){
  const certs = [
    {
      name: 'React Js',
      issuer: 'Coderhouse',
      link: '/62d0f742723fb70019bd38b7.png',
      extLink: 'https://www.coderhouse.com/certificados/62d0f742723fb70019bd38b7'
    },
    {
      name: 'Programación Backend',
      issuer: 'Coderhouse',
      link: '/6447f6c37a7303001aa1c7aa.png',
      extLink: 'https://www.coderhouse.com/certificados/6447f6c37a7303001aa1c7aa'
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'freeCodeCamp',
      link: 'https://www.freecodecamp.org/certification/AndresAMolina/javascript-algorithms-and-data-structures',
      extLink: 'https://www.freecodecamp.org/certification/AndresAMolina/javascript-algorithms-and-data-structures'
    },
    {
      name: 'Inglés C2',
      issuer: 'EF SET',
      link: '/efset-am.pdf',
      extLink: 'https://www.efset.org/cert/MREsE8'
    },
  ]
  return (
    <section id='certificates' className="pt-5 m-5 md:mt-10 md:w-2/3">
      <h3 className='text-center'>Certificados</h3>
      <div className='p-5 flex flex-col md:flex-row flex-wrap gap-5'>
        {certs.map((e,i) => (
          <div key={i} className="cont p-5 text-center md:w-1/3 md:flex-grow flex flex-col align-center justify-center">
            <h4 className="font-semibold">{e.name}</h4>
            <h5 className="font-extralight text-sm">{e.issuer}</h5>
            <div className="flex flex-col md:flex-row gap-2 mt-3 justify-center items-center mb-2 md:mb-0">
              <Link key={i} href={e.extLink} rel='noopener' target='_blank'
              className="cont flex items-center justify-center p-1 px-3 gap-2">
                <RemoveRedEyeIcon/>Ver
              </Link>
              <Link key={i} href={e.link} rel='noopener' target='_blank' download={true}
              className="cont flex items-center justify-center p-1 px-3 gap-2">
                <DownloadIcon/>Descargar
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}