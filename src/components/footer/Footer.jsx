function Footer() {
    return (
        <>
            <footer class="w-full font-clash bg-[linear-gradient(-78deg,#150F3D,#1C03FF)] text-[#bdbdbd] py-12 px-6 md:px-16">
                <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 items-start ">

                    <div class="space-y-4">
                        <h2 class="text-3xl md:text-4xl font-light tracking-wide leading-tight">
                            Ameer<br/><span class="font-normal">Muhammad</span>
                        </h2>
                        <div class="text-sm md:text-base  font-light space-y-1">
                            <p>Web Developer</p>
                            <p>Web Designer</p>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <div class="hidden md:block w-0.5 bg-[#bdbdbd] h-full mr-8"></div>
                        <div class="space-y-3">
                            <h3 class="text-sm md:text-base font-medium tracking-wider">Contact At:</h3>
                            <ul class="space-y-2 text-sm  font-light">
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">link 1</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <div class="hidden md:block w-0.5 bg-[#bdbdbd] h-full mr-8"></div>
                        <div class="space-y-3">
                            <h3 class="text-sm md:text-base font-medium tracking-wider">Certificates:</h3>
                            <ul class="space-y-2 text-sm font-light">
                                <li><a href="#" class="hover:underline transition-colors">Cert 1</a></li>
                                <li><a href="#" class="hover:underline transition-colors">Cert 2</a></li>
                                <li><a href="#" class="hover:underline transition-colors">Cert 3</a></li>
                                <li><a href="#" class="hover:underline transition-colors">Cert 4</a></li>
                            </ul>
                        </div>
                    </div>

                    <div class="flex h-full">
                        <div class="hidden md:block w-0.5 bg-[#bdbdbd] h-full mr-8"></div>
                        <div class="flex flex-col justify-between h-full space-y-4 md:space-y-0">
                            <div>
                                <a href="#" class="text-sm md:text-base hover:underline transition-colors font-light">GitHub</a>
                            </div>
                            <div class="text-xs md:text-sm font-light leading-relaxed">
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