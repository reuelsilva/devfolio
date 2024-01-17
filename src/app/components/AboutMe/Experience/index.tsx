import "./style.scss"

import Image from "next/image"

import reactLogo from "../../../assets/react-logo.png"
import jsLogo from "../../../assets/javascript-logo.png"
import tsLogo from "../../../assets/typescript-logo.png"
import htmlLogo from "../../../assets/html-logo.png"
import cssLogo from "../../../assets/css-logo.png"

export function Experience(){
    return(
        <div className="experience-area">
            <h3>Linguagens</h3>

            <div className="languages-list">
                <Image src={reactLogo} alt="Logo do React" priority />
                <Image src={jsLogo} alt="Logo do Javascript" priority/>
                <Image src={tsLogo} alt="Logo do Typescript" priority/>
                <Image src={htmlLogo} alt="Logo do HTML" priority/>
                <Image src={cssLogo} alt="Logo do CSS" priority/>
            </div>
        </div>
    )
}