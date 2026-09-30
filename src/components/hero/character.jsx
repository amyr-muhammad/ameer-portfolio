import charImg from "../../assets/images/Character.png"
function Character() {
    return (
        <>

            <img
                src={charImg}
                alt="Ameer's avatar"
                className="hidden lg:block absolute -bottom-3.75 left-1/2 -translate-x-1/2 h-[120vh] object-contain object-bottom drop-shadow-xl z-0 pointer-events-none"
            />
        </>
    )
}

export default Character;