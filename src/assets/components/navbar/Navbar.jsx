function Navbar() {
    return (
        <>
            <div className="bg-[#bdbdbd] text-[#1a1a4c] w-[95vw] md:w-[80vw] h-12 sm:h-12 md:h-12 flex items-center gap-2 sm:gap-4 md:gap-8 mt-10 rounded-[40px] px-4 sm:px-6 md:px-8 overflow-x-auto">

                
                <a href="" className="navlink mr-auto whitespace-nowrap hidden md:block text-xl lg:text-2xl">
                    Ameer Muhammad
                </a>

                
                <a href="" className="navlink whitespace-nowrap flex-1 md:flex-none text-center text-lg sm:text-xl md:text-xl lg:text-2xl">
                    About me
                </a>

                <a href="" className="navlink whitespace-nowrap flex-1 md:flex-none text-center text-lg sm:text-xl md:text-xl lg:text-2xl">
                    Skills
                </a>

                <a href="" className="navlink whitespace-nowrap flex-1 md:flex-none text-center text-lg sm:text-xl md:text-xl lg:text-2xl">
                    Projects
                </a>

            </div>
        </>
    )
}

export default Navbar;