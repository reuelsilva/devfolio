import { Education } from "./Education";
import { Experience } from "./Experience";
import { Social } from "./Social";

import "./style.scss"

export function AboutMe(){
    return(
        <div className="about-section">
            <Experience/>
            <Education/>
            <Social/>
        </div>
    )
}