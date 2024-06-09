import { ProjectItem } from "./ProjectItem"
import "./style.scss"

export function MyProjects(){
    return(
        <div className="projects-section">
            <h3>Meus Projetos</h3>
            <div className="projects-grid">               
                <ProjectItem title="projeto-blog" description="Projeto de blog para artigos de tecnologia com navegação entre rotas." skillsUsed={["NextJS", "React", "TypeScript", "Tailwind CSS", "JavaScript"]} repo_url="https://github.com/reuelsilva/projeto-blog" deploy_url="https://curiosidades-de-tecnologia.vercel.app/"/>

                <ProjectItem title="mks-loja-virtual" description="Projeto de loja virtual renderizando a lista de produtos de uma API e exibindo um carrinho de compras interativo." skillsUsed={["NextJS", "React", "TypeScript", "JavaScript", "Sass"]} repo_url="https://github.com/reuelsilva/mks-frontend-challenge" deploy_url="https://mks-frontend-challenge-deploy.vercel.app/" />

                <ProjectItem title="netflix-clone" description="Replicando a interface da Netflix com responsividade e APIs" skillsUsed={["React", "NextJS", "JavaScript", "Tailwind CSS", "HTML"]} repo_url="https://github.com/reuelsilva/netflix-clone" deploy_url="https://netflix-clone-develop.vercel.app/"/>
            </div>
        </div>
    )
}