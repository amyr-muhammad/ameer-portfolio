import GlassCard from "./Glasscard";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

function About() {
    return (
        <div className="relative w-full min-h-screen bg-[url('/src/assets/images/checkbackground.jpg')] bg-no-repeat bg-cover overflow-hidden">

            <h2 className="text-[#1a1a4c] font-[1000] text-3xl ps-3 pt-4
                            sm:text-5xl sm:ps-5 sm:pt-6
                            md:text-7xl md:ps-7 md:pt-8
                            lg:ps-9 lg:pt-10">
                About me
            </h2>

            {/* character*/}
            <img
                src="./src/assets/images/Character.png"
                alt="Ameer's avatar"
                className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 h-[110vh] object-contain drop-shadow-xl z-0 pointer-events-none"
            />

            {/* grid layout */}
            <div className="relative z-10 grid grid-cols-1 gap-4 p-5
                            sm:grid-cols-2
                            lg:grid-cols-3 lg:grid-rows-2 lg:h-[calc(100vh-130px)]">

                {/* About me paragraph */}
                <div className="lg:col-start-1 lg:row-start-1 lg:self-start lg:absolute">
                    <div className="lg:relative lg:left-40 lg:top-5">
                        <GlassCard size="xlarge">
                            Hi, I'm Ameer,<br /><br />
                            I'm a Web Developer and Designer focused on creating clean visuals
                            and turning them into functional, high performing websites. I enjoy
                            bringing ideas to life through code.
                        </GlassCard>
                    </div>
                </div>

                {/* Education paragraph */}
                <div className="lg:col-start-3 lg:row-start-1 lg:self-start lg:absolute">
                    <div className="lg:relative lg:right-5">
                        <GlassCard size="large">
                            <b>Education:</b><br /><br />
                            ICS – Completed Intermediate in Computer Science<br /><br />
                            BSCS – On going Bachelors in Computer Science (6th Semester)
                        </GlassCard>
                    </div>
                </div>

                {/* Contact at paragraph */}
                <div className="lg:col-start-1 lg:row-start-2 lg:self-end lg:absolute">
                    <div className="lg:relative lg:left-25 lg:bottom-15">
                        <GlassCard size="small">
                            <b>Contact at:</b>
                            <a href="mailto:amyrmian789@gmail.com"
                                className="flex items-center gap-2 mt-1 text-[#1a1a4c]">
                                <BiLogoGmail /> amyrmian789@gmail.com
                            </a>
                            <a href="https://instagram.com/amyr_muhammad"
                                className="flex items-center gap-2 mt-1 text-[#1a1a4c]">
                                <FaSquareInstagram /> amyr_muhammad
                            </a>
                            <a href="https://linkedin.com/in/ameer-muhammad"
                                className="flex items-center gap-2 mt-1 text-[#1a1a4c]">
                                <FaLinkedin /> Ameer Muhammad
                            </a>
                        </GlassCard>
                    </div>
                </div>

                {/* Tech Stack paragraph */}
                <div className="hidden sm:block lg:col-start-3 lg:row-start-2 lg:self-end lg:absolute">
                    <div className="lg:relative lg:bottom-10 lg:left-10">
                        <GlassCard size="medium">
                            <h3 className="lg:text-xl"><b>Tech Stack:</b></h3>
                            <div className="grid grid-cols-3 gap-2 justify-items-center mt-2">
                                <img src="./src/assets/images/Icons/html5.png" alt="HTML5" className="w-13" />
                                <img src="./src/assets/images/Icons/css.png" alt="CSS3" className="w-13" />
                                <img src="./src/assets/images/Icons/tailwind.png" alt="Tailwind" className="w-13" />
                                <img src="./src/assets/images/Icons/js.png" alt="JS" className="w-13" />
                                <img src="./src/assets/images/Icons/reactjs.png" alt="React" className="w-13" />
                                <img src="./src/assets/images/Icons/figma.png" alt="Figma" className="w-13" />
                            </div>
                        </GlassCard>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;