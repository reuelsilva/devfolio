import { ProjectProps } from '@/app/types/project-type';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LinkIcon from '@mui/icons-material/Link';

type ProjectItemProps = {
    projeto: ProjectProps
}

export default function ProjectItem({projeto}: ProjectItemProps) {
    return (
        <div className='flex flex-col gap-3 bg-white p-3 rounded-lg'>
            <div className='flex gap-2'><BookmarkBorderIcon style={{color: '#373738'}}/><h3 className='text-base font-medium'>{projeto.nome}</h3><LinkIcon style={{color: '#373738'}} className='ml-auto' /></div>
            <p className='text-sm font-normal'>{projeto.descricao}</p>
            <div className='flex flex-wrap gap-2 mt-auto'>
                {
                    projeto.tecnologias.map((tecnologia: string, index: number) => {
                        return (
                            <span key={index} className='text-xs text-white font-medium bg-color-04 p-2 rounded-lg'>{tecnologia}</span>
                        )
                    })
                }

            </div>
            <div className='flex gap-2'>
                <a href={projeto.link_repositorio} target='_blank' className='text-xs text-white font-normal bg-color-02 p-2 rounded-lg'>Abri repositório</a>
                {
                    projeto.link_deploy && <a href={projeto.link_deploy} target='_blank' className='text-xs text-white font-normal bg-color-02 p-2 rounded-lg'>Abrir deploy</a>
                }
            </div>
        </div>
    )
}