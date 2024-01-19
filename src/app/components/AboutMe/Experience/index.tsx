import "./style.scss"

import Image from "next/image"

export function Experience(){
    return(
        <div className="experience-area">
            <h3>Linguagens</h3>

            <div className="languages-list">
                <Image src="/assets/react-logo.png" alt="Logo do React" width={55} height={55} priority />
                <Image src="/assets/javascript-logo.png" alt="Logo do Javascript" width={55} height={55} priority/>
                <Image src="/assets/typescript-logo.png" alt="Logo do Typescript" width={55} height={55} priority/>
                <Image src="/assets/html-logo.png" alt="Logo do HTML" width={55} height={55} priority/>
                <Image src="/assets/css-logo.png" alt="Logo do CSS" width={55} height={55} priority/>
            </div>
        </div>
    )
}