import { DiscordIcon, HashIcon, MailIcon } from "../(components)/Icons";

export function Contacts() {
    return (
        <section className="mt-[159px]">
            <div className="flex items-center max-w-[50%] ">
                <span className="section-title text-primary">#</span>
                <h2 className="section-title leading-[0px]">contacts</h2>
                <div className="flex-1 h-[2px] ml-4 bg-primary max-w-[30%] "></div>
            </div>
            <div className="grid grid-cols-2 gap-x-20 mt-[45px]">
                <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
                <div>
                    <div className="w-fit ml-auto border border-grey-70 p-4">
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
    )
}