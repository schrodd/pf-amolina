'use client'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Link from 'next/link';

export default function Contact(){
  const contact = [
    {icon: EmailIcon, text: 'Email', link: 'mailto:andres_alejandro_rodriguez@hotmail.com'},
    {icon: LocalPhoneIcon, text: 'Teléfono', link: 'tel:+5491122550255'},
    {icon: LinkedInIcon, text: 'LinkedIn', link: 'https://www.linkedin.com/in/andres-molina-rodriguez/'},
    {icon: GitHubIcon, text: 'GitHub', link: 'https://github.com/schrodd'}
  ]
  return (
    <section id='contact' className="mb-10 pt-5 mt-5">
      <h3 className='text-center'>Contacto</h3>
      <div className='p-5 flex flex-col md:flex-row flex-wrap gap-2'>
        {contact.map((e,i) => (
          <Link key={i} href={e.link} className="flex gap-2 items-center p-5 py-2 cont flex-grow w-full md:w-auto">
            <e.icon/>
            <h4>{e.text}</h4>
          </Link>
        ))}
      </div>
    </section>
  )
}