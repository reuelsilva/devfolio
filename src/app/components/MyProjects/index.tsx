import { ProjectItem } from "./ProjectItem"
import "./style.scss"

export function MyProjects(){
    return(
        <div className="projects-section">
            <h3>Meus Projetos</h3>
            <div className="projects-grid">               
                <ProjectItem title="projeto-blog" description="Projeto de blog Curiosidades de Tecnologia. É um site estático e com navegação entre rotas." skillsUsed={["React", "TypeScript", "Tailwind CSS", "JavaScript"]} repo_url="https://github.com/reuelsilva/tech-blog" deploy_url="https://tech-blog-page.vercel.app/"/>

                <ProjectItem title="netflix-clone" description="Replicando a interface da Netflix com responsividade e APIs" skillsUsed={["React", "JavaScript", "HTML", "CSS"]} repo_url="https://github.com/reuelsilva/netflix-clone" deploy_url="https://reuelsilva.github.io/netflix-clone/"/>
            </div>
        </div>
    )
}