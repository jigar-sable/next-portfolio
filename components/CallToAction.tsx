import { useTheme } from "next-themes"
import Image from "next/image"
import Link from "next/link"
import { BiLinkExternal } from "react-icons/bi"
import { FaGithub } from "react-icons/fa"
import SectionWrapper from "./SectionWrapper"

const CallToAction = () => {

    const { theme } = useTheme();

    return (
        <SectionWrapper id='cta' className="xl:max-w-6xl my-24 lg:mx-10 xl:mx-auto mx-4 relative overflow-hidden flex flex-col-reverse md:flex-row gap-3 md:gap-0 items-center bg-gradient-to-r from-violet-700 to-purple-700 text-white rounded-2xl p-6 md:p-8 lg:px-12 lg:py-16 z-10">
            <div className="flex flex-col md:w-1/2 lg:w-3/5">
                <h2 className="text-2xl lg:text-4xl font-extrabold">Loved this <span className="text-yellow-400">portfolio?</span> </h2>
                <h3 className="md:text-base lg:text-xl font-medium mt-1.5">Make this <span className="text-yellow-400">yours</span> by forking.</h3>
                <p className="text-sm md:text-base mt-2.5 md:mt-6">Fork this template on GitHub start building your own portfolio website.</p>
                <div className="flex items-center gap-4 my-4">
                    <Link href="https://github.com/jigar-sable/next-portfolio" target="_blank" className="py-2 px-4 bg-white text-black rounded-lg w-fit flex items-center gap-2 hover:shadow-xl transition-shadow">
                        <FaGithub />
                        Fork Now
                    </Link>
                    <Link href="https://github.com/jigar-sable/next-portfolio#readme" target="_blank" className="py-2 px-4 bg-violet-800 rounded-lg w-fit flex items-center gap-2 hover:bg-violet-900 transition-all">
                        Visit Docs
                        <BiLinkExternal />
                    </Link>
                </div>
            </div>
            <div className="w-full md:w-1/2 h-40 md:h-52 lg:w-96 mb-4 md:mb-0 mx-auto rounded-lg bg-white dark:bg-grey-900">
                <Image alt="Fork this template on Github" quality={100} width={1000} height={1000} className="w-full h-full mt-2 object-cover object-top rounded-lg" src={theme === "dark" ? "/portfolio-fork-dark.png" : "/portfolio-fork.png"} />
            </div>
            {/* <div className="absolute -bottom-10 -right-6 h-72 w-96 rounded-lg bg-white"></div> */}
        </SectionWrapper >
    )
}

export default CallToAction