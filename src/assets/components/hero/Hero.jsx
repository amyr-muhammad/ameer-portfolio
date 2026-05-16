import Navbar from '../navbar/Navbar.jsx'
import Character from '../character/character.jsx'
import './hero.css'



function Hero() {
    return (
        <div className="hero">
            <Navbar />
            <Character />
        </div>
    )
}

export default Hero;