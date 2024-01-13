import { DiscordIcon, MailIcon, DotImagesIcon, PipelineIcon } from "./(components)/Icons";
import { Button } from "./(components)/Buttons";
import { SkillCard, ProjectCard } from "./(components)/Cards";
import { SkillInterface, ProjectInterface } from "@/types";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <section className="grid sm:grid-cols-2 items-center mt-[70px]">
        <div>
          <h1 className="text-[32px] font-[600] leading-normal text-white">Hi, I am Mustapha a <span className="text-primary text-[32px]">front-end developer</span> </h1>
          <p className="mt-[31px]">I craft responsive websites where technologies meet creativity</p>
          <Button className="hidden sm:block mt-[25px]" title="Contact me!" handleClick={() => { }} />
        </div>
        <div className="">
          <div className="sm:w-[80%] sm:max-w-[457px] flex relative sm:h-[386px] ">
            <PipelineIcon className="absolute top-20" />
            <div className="h-[290px] ">
              <Image src="/hero.png" alt="hero" fill={true} />
            </div>
            <DotImagesIcon className="absolute right-4 bottom-20" />
          </div>
          <div className="flex items-center border gap-x-[10px] bg-grey-80 absolute pr-5 py-[10px] px-2">
            <div className="h-4 w-4 bg-primary"></div>
            <p style={{ wordSpacing: '4px' }} className="">Currently working on <span className="text-white font-[700]">Portfolio</span></p>
          </div>
        </div>
      </section>
      <section className="mt-[74px]">
        <div className="flex items-center mb-12 ">
          <span className="section-title text-primary">#</span>
          <h2 className="section-title">projects</h2>
          <div className="hidden sm:block flex-1 h-[2px] ml-4 bg-primary max-w-[50%]"></div>
          <p className="ml-auto tracking-[0%] text-white font-[500]">View all {'~~>'}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
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
      <section className="mt-[60px] sm:mt-[106px]">
        <div className="flex items-center mb-12 w-[40%] pr-[49px]">
          <span className="section-title text-primary">#</span>
          <h2 className="section-title ">skills</h2>
          <div className="flex-1 hidden sm:block h-[2px] ml-4 bg-primary"></div>
        </div>
        <div className="grid sm:grid-cols-5 gap-x-[49px]">
          <div className="hidden sm:block col-span-2 relative">
            <div className="h-[86px] ml-auto aspect-square border -mt-6 mr-10 border-grey-70"></div>
            <DotImagesIcon className="-mt-10" />
            <DotImagesIcon className="absolute right-[40%] mt-12" />
            <PipelineIcon className="absolute bottom-0" height={113} width={113} />
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
      <section className="mt-[66px]">
        <div className="grid sm:grid-cols-2">
          <div>
            <div className="flex items-center max-w-[50%] ">
              <span className="section-title text-primary">#</span>
              <h2 className="section-title">about-me</h2>
              <div className="flex-1 hidden sm:block h-[2px] ml-4 bg-primary "></div>
            </div>
            <p className="mt-6">
              Hello, i’m Mustapha! <br /> <br className="hidden sm:block" /> <br />
              I’m a front-end developer based in Nigeria. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br /> <br className="hidden sm:block" /> <br />
              Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
            </p>
            <Button className="mt-[27px]" title="Read more ->" />
          </div>
          <div className="relative">
            <DotImagesIcon className="absolute top-10 sm:left-[40%] z-10" />
            <DotImagesIcon className="absolute top-[50%] left-[70%] z-10" />
            <div className="w-[339px] ml-auto h-[440px] sm:h-[507px] relative">
              <Image src="/about.png" alt="about-me" fill={true} />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[50px] sm:mt-[159px]">
        <div className="flex items-center max-w-[50%] ">
          <span className="section-title text-primary">#</span>
          <h2 className="section-title">contacts</h2>
          <div className="flex-1 hidden sm:block h-[2px] ml-4 bg-primary max-w-[30%] "></div>
        </div>
        <div className="grid sm:grid-cols-2 gap-y-4 gap-x-20 mt-[45px]">
          <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
          <div>
            <div className="sm:w-fit sm:ml-auto border border-grey-70 p-4">
              <p className="font-[600] text-white">Message me here</p>
              <div className="flex mt-4 mb-3 gap-x-[5px] items-center">
                <DiscordIcon />
                <p>Mustapha</p>
              </div>
              <div className="flex gap-x-[5px] items-center">
                <MailIcon />
                <p>ozovehe09@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
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