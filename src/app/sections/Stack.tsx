function SubSection(){
  return (
    <div className='flex flex-col md:flex-row items-center gap-2'>
      <h4>Fundamentales</h4>
      <div className="flex gap-2"><span className='tag'>HTML</span>
      <span className="tag">CSS</span>
      <span className="tag">JS/ES6</span>
      <span className="tag">Typescript</span></div>
    </div>
  )
}

export default function Stack(){
  const data = [
    {
      name: 'Fundamentales',
      sub: ['HTML', 'CSS', 'JS/ES6', 'Typescript']
    },
    {
      name: 'React',
      sub: ['React Hooks', 'NextJS', 'Redux Toolkit']
    },
    {
      name: 'Estilos',
      sub: ['Sass', 'Bootstrap', 'Tailwind', 'Framer Motion', 'Material UI']
    },
    {
      name: 'Bases de datos',
      sub: ['MongoDB', 'SQL', 'Firestore']
    },
    {
      name: 'Backend',
      sub: ['NodeJS', 'Express', 'NestJS', 'Socket.IO']
    },
    {
      name: 'Herramientas y más',
      sub: ['VSCode', 'Git/Github', 'Vite']
    }
  ]

  return (
    <section id='stack' className="mb-5 pt-5">
      <h3 className='text-center'>Mi Stack</h3>
      <div className='p-5 flex flex-col gap-3 tab w-screen md:w-auto'>
        {data.map((e,i) => (
          <div key={i} className='flex flex-col md:flex-row items-center gap-2'>
            <h4>{e.name}</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {e.sub.map((f,i) => (
                <span key={i} className="tag">{f}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}