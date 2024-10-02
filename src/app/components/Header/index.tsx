import Image from "next/image"

import "./style.scss"

export function Header(){
    return(
        <div className="header">
            <div>
                <h1>Olá, sou o dev Reuel! <span>👋</span></h1>
                <h2>Desenvolvedor Front-end Junior</h2>
            </div>

            <Image
                src="https://avatars.githubusercontent.com/u/109824495?v=4"
                alt=""
                width={250}
                height={250}
                priority
            />
      </div>
    )
}