import { ProjectItem } from "./ProjectItem"
import "./style.scss"

export function MyProjects(){
    return(
        <div className="projects-section">
            <h3>Meus Projetos</h3>
            <div className="projects-grid">               
                <ProjectItem title="projeto-blog" description="Projeto de blog para artigos de tecnologia com navegação entre rotas." skillsUsed={["NextJS", "React", "TypeScript", "Tailwind CSS", "JavaScript"]} repo_url="https://github.com/reuelsilva/projeto-blog" deploy_url="https://curiosidades-de-tecnologia.vercel.app/"/>

                <ProjectItem title="mks-loja-virtual" description="Projeto de loja virtual renderizando a lista de produtos de uma API e exibindo um carrinho de compras interativo." skillsUsed={["NextJS", "React", "TypeScript", "JavaScript", "Sass"]} repo_url="https://github.com/reuelsilva/mks-frontend-challenge" deploy_url="https://mks-frontend-challenge-deploy.vercel.app/" />

                <ProjectItem title="coffee-shop" description="Projeto de site de uma cafeteria desenvolvido com o back-end NodeJS para alimentar os dados do front-end." skillsUsed={["NextJS", "React", "JavaScript", "TypeScript", "CSS", "HTML"]} repo_url="https://github.com/reuelsilva/coffee-shop" deploy_url="#" />

                <ProjectItem title="weather-app" description="Projeto de uma aplicação de busca de dados do clima." skillsUsed={["HTML", "JavaScript", "CSS"]} repo_url="https://github.com/reuelsilva/weather-app" deploy_url="https://reuelsilva.github.io/weather-app/src/index.html" />

                <ProjectItem title="netflix-clone" description="Replicando a interface da Netflix com responsividade e APIs" skillsUsed={["React", "NextJS", "JavaScript", "Tailwind CSS", "HTML"]} repo_url="https://github.com/reuelsilva/netflix-clone" deploy_url="https://netflix-clone-develop.vercel.app/"/>
            </div>
        </div>
    )
}