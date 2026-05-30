import Glasscard from "../about/Glasscard"

function Skills() {
    return (
        <div className="relative 
                        w-full 
                        min-h-screen 
                        bg-[url('/src/assets/images/bluebg.jpg')] 
                        bg-no-repeat bg-cover overflow-hidden">
            {/* Heading Text */}
            <h2 className="text-[#bdbdbd] font-[1000] text-3xl ps-3 pt-4 font-clash-bold
                            sm:text-5xl sm:ps-5 sm:pt-6
                            md:text-7xl md:ps-7 md:pt-8
                            lg:ps-9 lg:pt-10">
                Skills
            </h2>
            {/* character image */}
            <img
                src="./src/assets/images/Character.png"
                alt="Ameer's avatar"
                className="hidden lg:block absolute -bottom-3.75 left-1/2 -translate-x-1/2 h-[120vh] object-contain object-bottom drop-shadow-xl z-0 pointer-events-none"
            />

            {/* glass ui with icons in it  */}

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 lg:grid-rows-5 gap-x-4 gap-y-4 sm:gap-y-6 lg:gap-x-4 lg:gap-y-20 mt-8 sm:mt-12 lg:mt-20 px-4 sm:px-6 lg:px-0 pb-8 lg:pb-0">

                {/* figma icon */}
                <div className="lg:row-span-2 lg:rotate-345 relative lg:relative">
                    <div className="flex justify-center lg:absolute lg:left-40">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/figma.png" alt="Figma" className="w-25" />
                        </Glasscard>
                    </div>

                </div>

                {/* css glass icon */}
                <div className="lg:row-span-2 lg:col-start-1 lg:row-start-3 lg:rotate-6 relative">
                    <div className="flex justify-center lg:absolute lg:left-50">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/css.png" alt="Css" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* Tailwind glass icon */}
                <div className="lg:row-span-2 lg:col-start-2 lg:row-start-1 lg:rotate-12 relative">
                    <div className="flex justify-center lg:absolute lg:top-20 lg:left-30">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/tailwind.png" alt="Tailwind" className="w-25 " />
                        </Glasscard>
                    </div>
                </div>

                {/* grid cell here */}

                {/* javascript glass icon */}
                <div className="lg:row-span-2 lg:col-start-4 lg:row-start-1 relative">
                    <div className="flex justify-center lg:absolute lg:bottom-25 lg:left-20 lg:rotate-10">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/js.png" alt="JS" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* vs code glass icon */}
                <div className="lg:row-span-2 lg:col-start-4 lg:row-start-3 relative">
                    <div className="flex justify-center lg:absolute lg:bottom-20 lg:left-10 lg:rotate-350">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/vs.png" alt="VS code" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* Html5 Glass icon */}
                <div className="lg:row-span-2 lg:col-start-5 lg:row-start-1 relative">
                    <div className="flex justify-center lg:block lg:rotate-345">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/html5.png" alt="HTML5" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* React js glass icon */}
                <div className="lg:row-span-2 lg:col-start-5 lg:row-start-3 relative">
                    <div className="flex justify-center lg:absolute lg:top-15 lg:right-60 lg:rotate-13">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/reactjs.png" alt="React js" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Skills