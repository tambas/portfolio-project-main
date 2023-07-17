import Image from 'next/image'

import "./header.scss"

export function Header(){
    return(
        <div className="header">
          <div>
            <h1>Olá, eu sou Natã! 👋</h1>
            <h2>Desenvolvedor web e mobile.</h2>
          </div>
          <Image
            src="/nata.jpg"
            alt="Vercel Logo"
            width={325}
            height={310}
            priority
          />
        </div>
    )
}