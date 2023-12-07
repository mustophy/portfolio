import { SkillInterface } from "@/types";
import { DotImagesIcon, HashIcon, PipelineIcon } from "../(components)/Icons";
import { SkillCard } from "../(components)/Cards";

export function Skills() {
    return (
        <section className="mt-[60px] sm:mt-[106px]">
            <div className="flex items-center mb-12 w-[40%] pr-[49px]">
                <span className="section-title text-primary">#</span>
                <h2 className="section-title ">skills</h2>
                <div className="flex-1 hidden sm:block h-[2px] ml-4 bg-primary"></div>
            </div>
            <div className="grid sm:grid-cols-5 gap-x-[49px]">
                <div className="hidden sm:block col-span-2 relative">
                    <div className="h-[86px] ml-auto aspect-square border -mt-6 mr-10 border-grey-70"></div>
                    <DotImagesIcon className="-mt-10"/>
                    <DotImagesIcon className="absolute right-[40%] mt-12"/>
                    <PipelineIcon className="absolute bottom-0" height={113} width={113}/>
                    <div className="h-[52px] absolute bottom-10 right-4 ml-auto aspect-square border mt-[92px] border-grey-70"></div>
                </div>
                <div className="col-span-3 grid sm:grid-cols-3 gap-2">
                    <div>
                        <SkillCard
                            title="Languages"
                            skills={languageData.skills}
                        />
                    </div>
                    <div className="flex flex-col gap-y-2">
                        {[databaseData, otherData].map(({ title, skills }) => (
                            <SkillCard
                                title={title}
                                skills={skills}
                            />
                        ))}
                    </div>
                    <div className="flex flex-col gap-y-2">
                        {[toolsData, frameWorkData].map(({ title, skills }) => (
                            <SkillCard
                                title={title}
                                skills={skills}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export const languageData: SkillInterface = {
    title: 'Languages',
    skills: ['Typescript', 'Lua', 'Python', 'Javascript']
}

export const databaseData: SkillInterface = {
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'MariaDB']
}

export const toolsData: SkillInterface = {
    title: 'Tools',
    skills: ['VSCode', 'Neovim', 'Linux', 'Figma', 'XFCE', 'Arch', 'Git', 'Font Awesome', 'Bootstrap']
}

export const otherData: SkillInterface = {
    title: 'Others',
    skills: ['HTML', 'CSS', 'Webpack', 'REST', 'Graphql']
}

export const frameWorkData: SkillInterface = {
    title: 'Frameworks',
    skills: ['React', 'Vue', 'Express', 'Next', 'Gatsby', 'Rest']
}