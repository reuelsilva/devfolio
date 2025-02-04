import Contacts from "./Contacts";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

export default function Main(){
    return(
        <main className="pt-20 sm:pt-[72px]">
            <Home/>
            <Projects/>
            <Skills/>
            <Contacts/>
        </main>
    )
}