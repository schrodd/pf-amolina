'use client'
import Link from "next/link"
import DownloadIcon from '@mui/icons-material/Download';

export default function Downnloads(){
  const certs = [
    {
      name: 'English',
      link: '/en.pdf',
    },
    {
      name: 'Español',
      link: '/es.pdf',
    },
  ]
  return (
    <section id='certificates' className="pt-5 m-5 md:w-2/3">
      <h3 className='text-center'>Mi CV</h3>
      <div className='p-5 flex flex-col md:flex-row flex-wrap justify-center gap-5'>
        {certs.map((e,i) => (
          <div key={i} className="cont p-5 text-center flex-col align-center justify-center">
            <h4 className="font-semibold">{e.name}</h4>
            <div className="flex flex-col md:flex-row gap-2 mt-3 justify-center items-center mb-2 md:mb-0">
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