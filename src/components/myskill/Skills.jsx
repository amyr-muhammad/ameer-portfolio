import Glasscard from "../about/Glasscard";
import figma from "../../assets/images/bigicons/figma.png";
import css from "../../assets/images/bigicons/css.png";
import tailwind from "../../assets/images/bigicons/tailwind.png";
import js from "../../assets/images/bigicons/js.png";
import vs from "../../assets/images/bigicons/vs.png";
import html5 from "../../assets/images/bigicons/html5.png";
import reactjs from "../../assets/images/bigicons/reactjs.png";

function Skills() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Heading Text */}
            <h2
                data-skills-heading
                className="text-[#bdbdbd] font-[1000] text-3xl ps-3 pt-4 font-clash-bold
                            sm:text-5xl sm:ps-5 sm:pt-6
                            md:text-7xl md:ps-7 md:pt-8
                            lg:ps-9 lg:pt-10">
                Skills
            </h2>

            {/* glass ui with icons in it */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-5 gap-x-4 gap-y-4 sm:gap-y-6 lg:gap-x-4 lg:gap-y-20 mt-8 sm:mt-12 lg:mt-20 px-4 sm:px-6 lg:px-0 pb-8 lg:pb-0">

                {/* figma icon */}
                <div className="lg:row-span-2 lg:rotate-345 relative lg:relative">
                    <div className="flex justify-center lg:absolute lg:left-40">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={figma} alt="Figma" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

                {/* css glass icon */}
                <div className="lg:row-span-2 lg:col-start-1 lg:row-start-3 lg:rotate-6 relative">
                    <div className="flex justify-center lg:absolute lg:left-50">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={css} alt="Css" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

                {/* Tailwind glass icon */}
                <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1 lg:rotate-12 relative">
                    <div className="flex justify-center lg:absolute lg:top-20 lg:left-30">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={tailwind} alt="Tailwind" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

                {/* javascript glass icon */}
                <div className="lg:row-span-2 lg:col-start-4 lg:row-start-1 relative">
                    <div className="flex justify-center lg:absolute lg:bottom-25 lg:left-20 lg:rotate-10">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={js} alt="JS" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

                {/* vs code glass icon */}
                <div className="lg:row-span-2 lg:col-start-4 lg:row-start-3 relative">
                    <div className="flex justify-center lg:absolute lg:bottom-20 lg:left-10 lg:rotate-350">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={vs} alt="VS code" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

                {/* Html5 Glass icon */}
                <div className="lg:row-span-2 lg:col-start-5 lg:row-start-1 relative">
                    <div className="flex justify-center lg:block lg:rotate-345">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={html5} alt="HTML5" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

                {/* React js glass icon */}
                <div className="lg:row-span-2 lg:col-start-5 lg:row-start-3 relative">
                    <div className="flex justify-center lg:absolute lg:top-15 lg:right-60 lg:rotate-13">
                        <div data-tile>
                            <Glasscard size="square">
                                <img src={reactjs} alt="React js" className="w-25" />
                            </Glasscard>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default Skills;