import { TwitterIcon } from "../(components)/Icons"

function Contact() {
    return (
        <main>
            <div className="flex mt-[61px]">
                <span className="section-title text-primary">/</span>
                <span className="section-title ">contacts</span>
            </div>

            <div className="grid grid-cols-6 mt-6">
                <p className="col-span-3">
                    I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
                </p>
            </div>


            <div className="flex mt-[112px]">
                <span className="section-title text-primary">#</span>
                <span className="section-title ">all-media</span>
            </div>
            <div className="flex">
                <div className="flex mt-3 items-center">
                    <TwitterIcon />
                    <p className="ml-2">@ozovehe_</p>
                </div>
            </div>
        </main>
    )
}

export default Contact