import { PROJECTS } from '@/app/constants/PROJECTS';
import { ProjectProps } from '@/app/types/project-type';
import ProjectItem from './ProjectItem';

export default function Projects() {
    return (
        <section id="projects" className="p-6">
            <h2 className="text-white text-2xl font-medium text-center">Projetos</h2>
            <div className="grid grid-cols-mobile md:grid-cols-md gap-3 justify-center mt-6">
                {
                    PROJECTS.map((item: ProjectProps, index: number) => {
                        return (
                            <ProjectItem key={index} projeto={item} />
                        )
                    })
                }
            </div>
        </section>
    )
}