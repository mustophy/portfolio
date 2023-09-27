"use client";

import { ProjectInterface } from "@/types";
import { HashIcon } from "../(components)/Icons";
import { ProjectCard } from "../(components)/Cards";

export function Projects() {
    return (
        <section className="mt-[74px]">
            <div className="flex items-center mb-12 ">
                <span className="section-title text-primary">#</span>
                <h2 className="section-title leading-[0px]">projects</h2>
                <div className="flex-1 h-[2px] ml-4 bg-primary max-w-[50%]"></div>
                <p className="ml-auto tracking-[0%] text-white font-[500]">View all {'~~>'}</p>
            </div>
            <div className="grid grid-cols-3 gap-x-4">
                {projectsList.map(({ about, status, technologies, imageUrl, title }) => (
                    <ProjectCard
                        imageUrl={imageUrl}
                        about={about}
                        status={status}
                        technologies={technologies}
                        title={title}
                    />
                ))}
            </div>

        </section>
    )
}


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