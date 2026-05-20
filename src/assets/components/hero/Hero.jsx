import Navbar from '../navbar/Navbar.jsx'
import Character from '../character/character.jsx'
import Herotext from '../herotext/Herotext.jsx';



function Hero() {
    return (
        <div className="bg-[url('/src/assets/images/Background.jpg')] bg-no-repeat bg-cover flex flex-col items-center h-screen">
            <Navbar />
            <Herotext/>
        </div>
    )
}

export default Hero;