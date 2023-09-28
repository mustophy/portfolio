"use client";

import Image from "next/image";
import { Button } from "../(components)/Buttons";
import { DotImagesIcon, PipelineIcon } from "../(components)/Icons";

function Hero() {
    return (
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
    );
};

export default Hero;