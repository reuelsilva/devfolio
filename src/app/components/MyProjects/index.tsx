import { ProjectItem } from "./ProjectItem"
import "./style.scss"

export function MyProjects(){
    return(
        <div className="projects-section">
            <h3>Meus Projetos</h3>
            <div className="projects-grid">
                <ProjectItem title="netflix-clone" description="Replicando a interface da Netflix com responsividade e APIs" skillsUsed={["React", "JavaScript", "HTML", "CSS"]} repo_url="https://github.com/reuelsilva/netflix-clone" deploy_url="https://reuelsilva.github.io/netflix-clone/"/>
                
                <ProjectItem title="projeto-android" description="Site responsivo com artigo 'Historia do Mascote do Android'" skillsUsed={["JavaScript", "HTML", "CSS", "Tailwind CSS"]} repo_url="https://github.com/reuelsilva/projeto-android" deploy_url="https://reuelsilva.github.io/projeto-android/"/>
            </div>
        </div>
    )
}