import Image from "next/image";
import { SkillCard } from "../(components)/Cards";
import { languageData, otherData, databaseData, toolsData, frameWorkData } from "../(HomeComponents)/Skills";

function AboutMe() {
    return (
        <main>
            <div className="flex mt-[61px]">
                <span className="section-title text-primary">/</span>
                <span className="section-title ">about-me</span>
            </div>
            <p className="text-white">Who am I?</p>
            <div className="grid grid-cols-5">

                <p className="mt-32 col-span-3">
                    Hello, i’m Ozovehe! <br />
                    <br />
                    I’m a self-taught front-end developer based in Nigeria. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                    <br /> <br />
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                </p>
                <div className="w-[339px] col-span-2 ml-auto h-[440px] sm:h-[507px] relative">
                    <Image src="/about.png" alt="about-me" fill={true} />
                </div>
            </div>

            <div className="flex mt-[112px]">
                <span className="section-title text-primary">#</span>
                <span className="section-title ">skills</span>
            </div>
            <div className="grid grid-cols-5 gap-x-4 mt-12">
                {[languageData, databaseData, toolsData, otherData, frameWorkData].map(({ title, skills }) => (
                    <SkillCard
                        title={title}
                        skills={skills}
                    />
                ))}
            </div>
        </main>
    );
}

export default AboutMe;
