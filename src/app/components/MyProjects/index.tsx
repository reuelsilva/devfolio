import { ProjectItem } from "./ProjectItem"
import "./style.scss"

export function MyProjects(){
    return(
        <div className="projects-section">
            <h3>Meus Projetos</h3>
            <div className="projects-grid">               
                <ProjectItem title="projeto-blog" description="Projeto de blog para artigos de tecnologia com navegação entre rotas." skillsUsed={["NextJS", "React", "TypeScript", "Tailwind CSS", "JavaScript"]} repo_url="https://github.com/reuelsilva/projeto-blog" deploy_url="https://curiosidades-de-tecnologia.vercel.app/"/>

                <ProjectItem title="web-technical-test" description="Teste front-end desenvolvendo uma Promotions Page rápida e responsiva em mobile first." skillsUsed={["JavaScript", "HTML", "CSS", "JSON Server"]} repo_url="https://github.com/reuelsilva/web-technical-test" />

                <ProjectItem title="mks-loja-virtual" description="Projeto de loja virtual renderizando a lista de produtos do catálogo e exibindo um carrinho de compras interativo." skillsUsed={["HTML", "CSS", "JavaScript", "JSON Server"]} repo_url="https://github.com/reuelsilva/mks-frontend-challenge" />

                <ProjectItem title="coffee-shop" description="Projeto de site de uma cafeteria desenvolvido com o back-end NodeJS para alimentar os dados do front-end." skillsUsed={["NextJS", "React", "JavaScript", "TypeScript", "CSS", "HTML"]} repo_url="https://github.com/reuelsilva/coffee-shop"/>

                <ProjectItem title="weather-app" description="Projeto de uma aplicação de busca de dados do clima." skillsUsed={["HTML", "JavaScript", "CSS"]} repo_url="https://github.com/reuelsilva/weather-app" deploy_url="https://reuelsilva.github.io/weather-app/" />

                <ProjectItem title="netflix-clone" description="Replicando a interface da Netflix com responsividade e APIs" skillsUsed={["React", "NextJS", "JavaScript", "Tailwind CSS", "HTML"]} repo_url="https://github.com/reuelsilva/netflix-clone" deploy_url="https://netflix-clone-develop.vercel.app/"/>
            </div>
        </div>
    )
}