import Character from "../character/character";
function Herotext() {
    return (
        <>
            <section className="relative w-full h-screen overflow-hidden flex items-center justify-center">

                <div className="absolute whitespace-nowrap text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-[#bdbdbd] flex items-center gap-6">

                    <h2>AMEER</h2>

                    <img
                        src="./src/assets/images/icon2.png"
                        alt=""
                        className="w-12 sm:w-30 md:w-48 lg:w-60"
                    />

                    <h2>MUHAMMAD</h2>

                    <img
                        src="./src/assets/images/icon1.png"
                        alt=""
                        className="w-8 sm:w-12 md:w-16 lg:w-20"
                    />

                </div>

                <Character />



            </section>
        </>
    )
}

export default Herotext;

