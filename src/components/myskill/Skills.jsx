import Glasscard from "../about/Glasscard"

function Skills() {
    return (
        <div className="relative 
                        w-full 
                        min-h-screen 
                        bg-[url('/src/assets/images/bluebg.jpg')] 
                        bg-no-repeat bg-cover overflow-hidden">
            {/* Heading Text */}
            <h2 className="text-[#bdbdbd] font-[1000] text-3xl ps-3 pt-4
                            sm:text-5xl sm:ps-5 sm:pt-6
                            md:text-7xl md:ps-7 md:pt-8
                            lg:ps-9 lg:pt-10">
                Skills
            </h2>
            {/* character image */}
            <img
                src="./src/assets/images/Character.png"
                alt="Ameer's avatar"
                className="hidden lg:block absolute -bottom-3 left-1/2 -translate-x-1/2 h-[110vh] object-contain drop-shadow-xl z-0 pointer-events-none"
            />

            {/* glass ui with icons in it  */}

            <div className="grid grid-cols-5 grid-rows-5 gap-x-4 gap-y-20  mt-20">

                {/* figma icon */}
                <div className="row-span-2 rotate-345 relative">
                    <div className="absolute left-40">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/figma.png" alt="Figma" className="w-25" />
                        </Glasscard>
                    </div>

                </div>

                {/* css glass icon */}
                <div className="row-span-2 col-start-1 row-start-3 rotate-6 relative">
                    <div className="absolute left-50">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/css.png" alt="Css" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* Tailwind glass icon */}
                <div className="row-span-2 col-start-2 row-start-1 rotate-12  relative">
                    <div className="absolute top-20 left-30">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/tailwind.png" alt="Tailwind" className="w-25 " />
                        </Glasscard>
                    </div>
                </div>

                {/* grid cell here */}

                {/* javascript glass icon */}
                <div className="row-span-2 col-start-4 row-start-1 relative">
                    <div className="absolute bottom-25 left-20 rotate-10">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/js.png" alt="JS" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* vs code glass icon */}
                <div className="row-span-2 col-start-4 row-start-3 relative">
                    <div className="absolute bottom-20 left-10 rotate-350">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/vs.png" alt="VS code" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* Html5 Glass icon */}
                <div className="row-span-2 col-start-5 row-start-1">
                    <div className="rotate-345">
                        <Glasscard size="square">
                            <img src="./src/assets/images/bigicons/html5.png" alt="HTML5" className="w-25" />
                        </Glasscard>
                    </div>
                </div>

                {/* React js glass icon */}
                <div className="row-span-2 col-start-5 row-start-3 relative">
                    <div className="absolute top-15 right-60 rotate-13">
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