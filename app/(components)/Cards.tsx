import Image from "next/image";
import { Button } from "./Buttons";
import { ProjectInterface, SkillInterface } from "@/types";

export function SkillCard({ title, skills } : SkillInterface) {
    return (
        <div className="border border-grey-70">
            <p className="border-b border-grey-70 px-2 text-white font-[600] py-2">{title}</p>
            <div className="flex flex-wrap gap-2 p-2">
                {skills.map(skill => <span key={skill} className="">{skill}</span>)}
            </div>
        </div>
    )
}

export function ProjectCard({ imageUrl, technologies, title, about, status }: ProjectInterface) {
    return (
        <div className="border border-grey-70 h-fit">
            <div className="h-[201px] relative">
                <Image src={imageUrl} alt={title} fill={true}/>
            </div>
            <div className="border-y border-grey-70 flex flex-wrap gap-2 p-2">
                {technologies.map(tech => <span key={tech}>{tech}</span>)}
            </div>
            <div className="p-4">
                <h2 className="text-2xl text-white font-[500]">{title}</h2>
                <p style={{ wordSpacing: '8px'}} className="my-4">{about}</p>
                <Button title={status} handleClick={() => {}} buttonType={status}/>
            </div>
        </div>
    )
}
