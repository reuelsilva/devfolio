import { EmailIcon } from "./Icons/email-icon";
import { GithubIcon } from "./Icons/github-icon";
import { LinkedInIcon } from "./Icons/linkedin-icon";
import { WhatsAppIcon } from "./Icons/whatsapp-icon";

import "./style.scss"

export function Social(){
    return(
        <div>
            <h3>Contate-me</h3>
            <div className="social-list">
                <a href="https://www.linkedin.com/in/reuelsilva" target="_blank"><LinkedInIcon/></a>
                <a href="https://github.com/reuelsilva" target="_blank"><GithubIcon/></a>
                <a href="mailto:reuelsilva19@gmail.com"><EmailIcon/></a>
                <a href="https://wa.me/21996230995"><WhatsAppIcon/></a>
            </div>
        </div>
    )
}