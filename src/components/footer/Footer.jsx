function Footer() {
    return (
        <>
            <footer class="w-full font-clash bg-[linear-gradient(-78deg,#150F3D,#1C03FF)] text-[#bdbdbd] py-6 sm:py-10 md:py-12 px-3 sm:px-6 md:px-16">
                <div class="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-4 items-start">

                    <div class="space-y-2 sm:space-y-4">
                        <h2 class="text-xl sm:text-3xl md:text-4xl font-light tracking-wide leading-tight">
                            Ameer<br/><span class="font-normal">Muhammad</span>
                        </h2>
                        <div class="text-xs sm:text-sm md:text-base font-light space-y-0.5">
                            <p>Web Developer</p>
                            <p>Web Designer</p>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <div class="hidden lg:block w-0.5 bg-[#bdbdbd] h-full mr-3 sm:mr-6 md:mr-8"></div>
                        <div class="space-y-1.5 sm:space-y-3">
                            <h3 class="text-xs sm:text-sm md:text-base font-medium tracking-wider">Contact At:</h3>
                            <ul class="space-y-0.5 sm:space-y-2 text-xs sm:text-sm font-light">
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <div class="hidden lg:block w-0.5 bg-[#bdbdbd] h-full mr-3 sm:mr-6 md:mr-8"></div>
                        <div class="space-y-1.5 sm:space-y-3">
                            <h3 class="text-xs sm:text-sm md:text-base font-medium tracking-wider">Certificates:</h3>
                            <ul class="space-y-0.5 sm:space-y-2 text-xs sm:text-sm font-light">
                                <li><a href="#" class="hover:underline transition-colors">Cert 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">Cert 2</a></li>
                                <li><a href="#" class="hover:underline transition-colors">Cert 3</a></li>
                                <li><a href="#" class="hover:underline transition-colors">Cert 4</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <div class="hidden lg:block w-0.5 bg-[#bdbdbd] h-full mr-3 sm:mr-6 md:mr-8"></div>
                        <div class="flex flex-col justify-between h-full space-y-3 sm:space-y-4 lg:space-y-0">
                            <div>
                                <a href="#" class="text-xs sm:text-sm md:text-base hover:underline transition-colors font-light">GitHub</a>
                            </div>
                            <div class="text-xs sm:text-xs md:text-sm font-light leading-relaxed">
                                <p>&copy; 2026</p>
                                <p>Ameer Muhammad</p>
                            </div>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer;