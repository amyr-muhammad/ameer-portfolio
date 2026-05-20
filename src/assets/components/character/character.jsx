import Herotext from "../herotext/Herotext";

function Character() {
    return (
        <>
            <div className="
                        w-[40vw] sm:w-[30vw] md:w-[31vw] lg:w-[32vw]
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
                        ">
                <img
                    src="/src/assets/images/Character.png"
                    alt="Character"
                    className="w-full h-full object-cover object-bottom translate-y-2"
                />
            </div>
        </>
    )
}

export default Character;