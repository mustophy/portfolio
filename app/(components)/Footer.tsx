import { DiscordIcon, GithubIcon } from "./Icons"

function Footer() {
    return (
        <footer className="px-[15%] py-8 mt-[145px] border-t border-grey-70">
            <div className="flex justify-between">
                <div>
                    <div className="flex items-center gap-x-2">
                        <div className="w-6 h-6 bg-white/90 rounded-md"></div>
                        <p className="text-white leading-[0px] font-[500]">Mustapha</p>
                    </div>
                    <p style={{ wordSpacing: '2px' }} className="mt-4 text-white">Front-end web developer</p>
                </div>
                <div className="flex flex-col gap-y-3">
                    <p className="text-white text-2xl font-[500]">Media</p>
                    <div className="flex gap-x-[11px]">
                        <GithubIcon />
                        <DiscordIcon />
                    </div>
                </div>
            </div>
            <p className="text-center mt-12">&copy; Copyright 2022. Built with react</p>
        </footer>
    )
}

export default Footer