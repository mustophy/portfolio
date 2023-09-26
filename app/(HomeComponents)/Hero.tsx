"use client";

import Image from "next/image";
import { Button } from "../(components)/Buttons";

function Hero() {
    return (
        <section className="grid grid-cols-2 items-center mt-[70px]">
            <div>
                <h1 className="text-[32px] font-[600] leading-normal text-white">Hi, I am Mustapha a <span className="text-primary text-[32px]">front-end developer</span> </h1>
                <p className="mt-[31px]">I craft responsive websites where technologies meet creativity</p>
                <Button className="mt-[25px]" title="Contact me!" handleClick={() => { }} />
            </div>
            <div>
                <div className="w-[80%] max-w-[457px] ml-auto flex relative h-[386px] ">
                    <Image src="/hero.png" alt="hero" fill={true} />
                    <div className="flex items-center border gap-x-[10px] bg-grey-80 absolute translate-x-[50%] -left-[50%] w-fit -bottom-12 py-[10px] px-2">
                        <div className="h-4 w-4 bg-primary"></div>
                        <p className="mr-20">Currently working on <span className="text-white font-[700]">Portfolio</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;