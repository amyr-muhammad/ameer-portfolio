// import Character from "./character.jsx";
import icon1 from "../../assets/images/icon1.png";
import icon2 from "../../assets/images/icon2.png";
// import MarqueeText from "react-marquee-text"
// import 'MarqueeText/styles.css'
function Herotext() {

    return (
        <>
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

                <div className="w-full overflow-hidden">
                    <div className="flex w-max animate-marquee">

                        {/* First copy */}
                        <div className="whitespace-nowrap font-clash-bold
                        text-5xl sm:text-6xl md:text-7xl lg:text-9xl
                        font-bold text-[#bdbdbd] flex items-center gap-6 pr-6">

                            <h2>AMEER</h2>

                            <img
                                src={icon2}
                                alt=""
                                className="w-12 sm:w-30 md:w-48 lg:w-60"
                            />

                            <h2>MUHAMMAD</h2>

                            <img
                                src={icon1}
                                alt=""
                                className="w-8 sm:w-12 md:w-16 lg:w-20 mx-15"
                            />
                        </div>


                        {/* Second identical copy */}
                        <div className="whitespace-nowrap font-clash-bold
                        text-5xl sm:text-6xl md:text-7xl lg:text-9xl
                        font-bold text-[#bdbdbd] flex items-center gap-6 pr-6">

                            <h2>AMEER</h2>

                            <img
                                src={icon2}
                                alt=""
                                className="w-12 sm:w-30 md:w-48 lg:w-60"
                            />

                            <h2>MUHAMMAD</h2>

                            <img
                                src={icon1}
                                alt=""
                                className="w-8 sm:w-12 md:w-16 lg:w-20 mx-15"
                            />
                        </div>

                    </div>
                </div>


                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="
                        w-[40vw] sm:w-[23vw] md:w-[24vw] lg:w-[25vw]
                        aspect-3/4
                        flex 
                        justify-center 
                        items-end 
                        bg-[#bdbdbd] 
                        rounded-[25%]
                        overflow-hidden
                        my-auto
                        shrink-0
                        z-10
                        opacity-0
                        
                        " data-card-spot>

                    </div>
                </div>

            </section>
        </>
    )
}

export default Herotext;