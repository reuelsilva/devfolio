import "./style.scss"

import Image from "next/image"

export function Experience(){
    return(
        <div className="experience-area">
            <h3>Habilidades</h3>
            <p>Linguagens, Frameworks e Bancos de Dados</p>

            <div className="languages-list">
                <Image src="/assets/nextjs-logo.png" alt="Logo do Next.JS" width={55} height={55} priority />
                <Image src="/assets/react-logo.png" alt="Logo do React" width={55} height={55} priority />
                <Image src="/assets/javascript-logo.png" alt="Logo do Javascript" width={55} height={55} priority/>
                <Image src="/assets/typescript-logo.png" alt="Logo do Typescript" width={55} height={55} priority/>
                <Image src="/assets/html-logo.png" alt="Logo do HTML" width={55} height={55} priority/>
                <Image src="/assets/css-logo.png" alt="Logo do CSS" width={55} height={55} priority/>
                <Image src="/assets/tailwind-css-logo.png" alt="Logo do Tailwind CSS" width={55} height={34} priority />
                <Image src="/assets/mysql-logo.png" alt="Logo do MySQL" width={55} height={55} priority />
                <Image src="/assets/postgresql-logo.png" alt="Logo do Postgresql" width={55} height={55} priority />
            </div>
        </div>
    )
}