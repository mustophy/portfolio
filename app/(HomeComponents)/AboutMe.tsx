import Image from "next/image";
import { HashIcon } from "../(components)/Icons";
import { Button } from "../(components)/Buttons";

export function AboutMe() {
    return (
        <section className="mt-[66px]">
            <div className="grid grid-cols-2">
                <div>
                    <div className="flex items-center max-w-[50%] ">
                        <span className="section-title text-primary">#</span>
                        <h2 className="section-title leading-[0px]">about-me</h2>
                        <div className="flex-1 h-[2px] ml-4 bg-primary "></div>
                    </div>
                    <p className="mt-6">
                        Hello, i’m Mustapha! <br /> <br /> <br />
                        I’m a front-end developer based in Nigeria. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. <br /> <br /> <br />
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
                    </p>
                    <Button className="mt-[27px]" title="Read more ->" />
                </div>
                <div className="">
                    <div className="w-[339px] ml-auto h-[507px] relative">
                        <Image src="/about.png" alt="about-me" fill={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;