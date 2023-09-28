import { ProjectInterface } from "@/types";
import { ProjectCard } from "../(components)/Cards";
function Works() {
    return (
        <div>
            <div className="flex mt-[61px]">
                <span className="section-title text-primary">/</span>
                <span className="section-title ">projects</span>
            </div>
            <span className="mt-[14px]">List of my projects</span>
            <div className="flex items-center mt-[68px] mb-12">
                <span className="section-title text-primary">#</span>
                <h2 className="section-title">complete-apps</h2>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                {projectsList.map(({ title, technologies, about, status, imageUrl }) => (
                    <ProjectCard
                        title={title}
                        technologies={technologies}
                        about={about}
                        status={status}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
            <div className="flex items-center mt-[68px] mb-12">
                <span className="section-title text-primary">#</span>
                <h2 className="section-title">small-projects</h2>
            </div>
            <div className="grid grid-cols-3 gap-x-4 gap-y-4">
                {projectsList.map(({ title, technologies, about, status, imageUrl }) => (
                    <ProjectCard
                        title={title}
                        technologies={technologies}
                        about={about}
                        status={status}
                        imageUrl={imageUrl}
                    />
                ))}
            </div>
        </div>
    )
}

export default Works;

const projectsList: ProjectInterface[] = [
    {
        imageUrl: '/chertnode.png',
        title: 'ChertNodes',
        about: 'Minecraft servers hosting',
        status: 'Live',
        technologies: ['HTML', 'SCSS', 'Python', 'Flask']
    },
    {
        imageUrl: '/protectx.png',
        title: 'ProtectX',
        about: 'Discord anti-crash bot',
        status: 'Live',
        technologies: ['React', 'Express.js', 'Discord.js', 'Node.js', 'HTML', 'CSS', 'Python', 'Flask']
    },
    {
        imageUrl: '/kahoot.png',
        title: 'Kahoot Answers Viewer',
        about: 'Get answers to your cahoot quiz',
        status: 'Cached',
        technologies: ['HTML', 'SCSS', 'Python', 'Flask']
    },
]