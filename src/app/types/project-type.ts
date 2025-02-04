export type ProjectProps = {
    id: number,
    nome: string,
    descricao: string,
    tecnologias: string[],
    link_repositorio: string,
    link_deploy?: string
}