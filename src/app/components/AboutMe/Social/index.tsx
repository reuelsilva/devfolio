import { EmailIcon } from "./Icons/email-icon";
import { GithubIcon } from "./Icons/github-icon";
import { LinkedInIcon } from "./Icons/linkedin-icon";

import "./style.scss"

export function Social(){
    return(
        <div className="social-list">
            <a href="https://www.linkedin.com/in/reuelsilva" target="_blank"><LinkedInIcon/></a>
            <a href="https://github.com/reuelsilva" target="_blank"><GithubIcon/></a>
            <a href="mailto:reuelsilva19@gmail.com"><EmailIcon/></a>
        </div>
    )
}