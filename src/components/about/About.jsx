import GlassCard from "./Glasscard";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function About() {
    return (
        <>
            <div className="relative w-full min-h-screen bg-[url('/src/assets/images/checkbackground.jpg')] bg-no-repeat bg-cover">

                <h2 className="text-[#1a1a4c] font-[1000] text-3xl ps-3 pt-4
                                sm:text-5xl sm:ps-5 sm:pt-6
                                md:text-7xl md:ps-7 md:pt-8
                                lg:text lg:ps-9 lg:pt-10">
                    About me

                </h2>
                <div className="grid grid-rows-max grid-cols-1 gap-3 p-5 justify-items-center ">
                    <GlassCard size="large">Hi, I’m Ameer, <br />
                        I’m a Web Developer and Designer focused on creating clean visuals and turning them into functional, high performing websites. I enjoy bringing ideas to life through code.</GlassCard>
                    <GlassCard size="medium">
                        <b>Education: </b> <br />
                        ICS- Completed Intermediate in Computer
                        Science BSCS- On going Bachelors  in Computer Science (6th Semester)
                    </GlassCard>
                    <GlassCard size="small">
                        <b>Contact at:</b>
                        <a href="" className="flex justify-start items-center text-#1a1a4c"><BiLogoGmail />: amyrmian789@gmail.com</a>
                        <a href="" className="flex justify-start items-center text-[#1a1a4c]"><FaLinkedin />: Ameer Muhammad</a>
                        <a href="" className="flex justify-start items-center text-[#1a1a4c]">< FaSquareInstagram />: amyr_muhmmad</a>
                    </GlassCard>
                    <GlassCard size="medium">
                        <b className="mb-1">Tech stack:</b>
                        <div className="grid grid-cols-4 gap-x-2 gap-y-2 justify-items-center w-max mx-auto">
                            <img src="./src/assets/images/Icons/html5.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/css.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/js.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/reactjs.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/tailwind.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/figma.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/github.png" alt="" className="w-13" />
                            <img src="./src/assets/images/Icons/vs.png" alt="" className="w-13" />

                        </div>
                    </GlassCard>

                    <img
                        src="./src/assets/images/Character.png"
                        alt=""
                        className="hidden"
                    />
                </div>



            </div>
        </>
    );
}

export default About;