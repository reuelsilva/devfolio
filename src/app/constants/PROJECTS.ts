import { ProjectProps } from "../types/project-type";

export const PROJECTS:ProjectProps[] = [
    {
        id: 1,
        nome: 'projeto-blog',
        descricao: 'Projeto de blog para artigos de tecnologia com navegação entre rotas.',
        tecnologias: ['NextJS', 'ReactJS', 'TypeScript', 'Tailwind CSS', 'JavaScript'],
        link_repositorio: 'https://github.com/reuelsilva/projeto-blog',
        link_deploy: 'https://curiosidades-de-tecnologia.vercel.app/'
    },
    {
        id: 2,
        nome: 'vulcao-tintas-frontend',
        descricao: 'Projeto de landing page para a loja Vulcão Tintas, especializada em tintas automotivas e imobiliárias.',
        tecnologias: ['NextJS', 'ReactJS', 'Tailwind CSS', 'JavaScript', 'TypeScript'],
        link_repositorio: 'https://github.com/reuelsilva/vulcao-tintas-frontend',
        link_deploy: 'https://vulcao-tintas-frontend.vercel.app/'   
    },
    {
        id: 3,
        nome: 'mks-loja-virtual',
        descricao: 'Projeto de loja virtual renderizando a lista de produtos do catálogo e exibindo um carrinho de compras interativo.',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'JSON-Server'],
        link_repositorio: 'https://github.com/reuelsilva/mks-frontend-challenge',
        link_deploy: ''   
    },
    {
        id: 4,
        nome: 'desafio-galeria-de-imagens',
        descricao: 'Desafio de galeria de imagens do processo seletivo do projeto Frontend Fusion.',
        tecnologias: ['ReactJS', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS'],
        link_repositorio: 'https://github.com/reuelsilva/desafio-galeria-de-imagens-frontendfusion',
        link_deploy: 'https://banco-de-imagens-app.vercel.app/'   
    },
    {
        id: 5,
        nome: 'desafio-formulario-com-validacao',
        descricao: 'Desenvolvimento de um formulário de cadastro de membros contendo validação de dados com Yup.',
        tecnologias: ['ReactJS', 'JavaScript', 'TypeScript', 'HTML', 'Tailwind CSS'],
        link_repositorio: 'https://github.com/reuelsilva/desafio-formulario-com-validacao-frontend',
        link_deploy: 'https://formulario-projeto-frontend-fusion.vercel.app/'   
    },
    {
        id: 6,
        nome: 'netflix-clone',
        descricao: 'Replicando a interface da Netflix com responsividade e APIs.',
        tecnologias: ['NextJS', 'ReactJS', 'JavaScript', 'Tailwind CSS', 'HTML'],
        link_repositorio: 'https://github.com/reuelsilva/netflix-clone',
        link_deploy: 'https://netflix-clone-develop.vercel.app/'   
    },
    {
        id: 7,
        nome: 'coffee-shop',
        descricao: 'Projeto de site de uma cafeteria desenvolvido com o back-end NodeJS para alimentar os dados do front-end.',
        tecnologias: ['NextJS', 'ReactJS', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
        link_repositorio: 'https://github.com/reuelsilva/coffee-shop',
        link_deploy: ''   
    },
    {
        id: 8,
        nome: 'web-technical-test',
        descricao: 'Teste front-end desenvolvendo uma Promotions Page rápida e responsiva em mobile first.',
        tecnologias: ['HTML', 'CSS', 'JavaScript', 'JSON-Server'],
        link_repositorio: 'https://github.com/reuelsilva/web-technical-test',
        link_deploy: ''   
    },
]