import CircularGallery from "../circularcarousel/CircularGallery"

const projects = [
    { image: '/projects/project1.jpg',  },
    { image: '/projects/project2.jpg',  },
    { image: '/projects/project3.jpg',  },
    { image: '/projects/project4.jpg',  },
    { image: '/projects/project5.jpg',  },
];



export default function ProjectsSection() {
    return (
        <>
            <div className="relative w-full 
            min-h-screen bg-[url('/src/assets/images/checkbackground.jpg')] 
            bg-no-repeat bg-cover overflow-hidden">

                <h3 className="text-8xl text-[#1a1a4c] font-clash-medium
                               text-center pt-5">Projects I have <br /> made
                </h3>

                {/* <div className=" flex-1 w-full"  style={{ height: 'calc(100vh - 220px)' }}>
                    <CircularGallery
                        items={projects}
                        bend={6}            
                        borderRadius={0.06} 
                        scrollSpeed={1.9}   
                        textColor="#1a1a4c"
                    />
                </div> */}

            </div>

        </>
    );
}

