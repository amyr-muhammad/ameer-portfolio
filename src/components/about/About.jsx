import GlassCard from "./Glasscard";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";


function About() {
    return (
        <>
            <div className="relative w-full h-screen bg-[url('/src/assets/images/checkbackground.jpg')] bg-no-repeat bg-cover overflow-hidden">

                <h2 className="text-[#1a1a4c] font-[1000] text-3xl ps-3 pt-4
                                sm:text-5xl sm:ps-5 sm:pt-6
                                md:text-7xl md:ps-7 md:pt-8
                                lg:text lg:ps-9 lg:pt-10">
                    About me
                </h2>
                <div className="grid grid-rows-3 grid-cols-1 gap-5 p-5 justify-items-center align-bottom">
                    <GlassCard size="large">Hi, I’m Ameer,
                        I’m a Web Developer and Designer focused on creating clean visuals and turning them into functional, high performing websites. I enjoy bringing ideas to life through code.</GlassCard>
                    <GlassCard size="medium">
                        Education: <br />
                        ICS- Completed Intermediate in Computer 
                        Science BSCS- On going Bachelors  in Computer Science (6th Semester)
                    </GlassCard>
                    <GlassCard>

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