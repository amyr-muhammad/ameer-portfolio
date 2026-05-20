import Navbar from '../navbar/Navbar.jsx'
import Herotext from './Herotext.jsx';



function Hero() {
    return (
        <div className="bg-[url('/src/assets/images/Background.jpg')] bg-no-repeat bg-cover flex flex-col items-center h-screen">
            <Navbar />
            <Herotext/>
        </div>
    )
}

export default Hero;