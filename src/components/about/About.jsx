import Glasscard from "./glasscard";

function About() {
    return (
        <>
        
        <div className="w-full 
        h-screen 
        bg-[url('/src/assets/images/checkbackground.jpg')] 
        bg-no-repeat
        bg-cover
        
        
        ">
            <h2 className="text-[#1a1a4c] font-[1000] text-3xl ps-3 pt-4
             sm:text-5xl sm:ps-5 sm:pt-6
             md:text-7xl md:ps-7 md:pt-8
             lg:text lg:ps-9 lg:pt-10 ">About me</h2>
        <Glasscard/>
        </div>
        </>
    )
}

export default About;