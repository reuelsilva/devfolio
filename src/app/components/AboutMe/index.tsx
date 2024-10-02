import { Education } from "./Education";
import { Experience } from "./Experience";
import { Bio } from "./Bio";

import "./style.scss"

export function AboutMe(){
    return(
        <div className="about-section">
            <Bio />
            <Education/>
            <Experience/>
        </div>
    )
}