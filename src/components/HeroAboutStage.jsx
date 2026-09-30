import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Hero from "./hero/Hero.jsx";
import About from "./about/About.jsx";
import Skills from "./myskill/Skills.jsx";
import Character from "./hero/character.jsx";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FIT = 2.3;
const RADIUS = 0.25;

function HeroAboutStage() {
    const stageRef = useRef(null);
    const revealRef = useRef(null);
    const grayRef = useRef(null);
    const skillsBgRef = useRef(null);
    const charRef = useRef(null);
    const aboutRef = useRef(null);
    const skillsRef = useRef(null);

    useGSAP(() => {
        const stage = stageRef.current;
        const spot = stage.querySelector("[data-card-spot]");
        const img = charRef.current.querySelector("img");
        const tiles = skillsRef.current.querySelectorAll("[data-tile]");
        const heading = skillsRef.current.querySelector("[data-skills-heading]");

        const measure = () => {
            const s = stage.getBoundingClientRect();
            const r = spot.getBoundingClientRect();
            return {
                top: r.top - s.top,
                left: r.left - s.left,
                right: s.right - r.right,
                bottom: s.bottom - r.bottom,
                width: r.width,
                height: r.height,
            };
        };

        const tl = gsap.timeline({
            defaults: { ease: "power1.inOut", duration: 1 },
            scrollTrigger: {
                trigger: stage,
                start: "top top",
                end: "+=450%",
                pin: true,
                scrub: 0.5,
                invalidateOnRefresh: true,
            },
        });

        /* ---------- PHASE 1: hero -> about (0 to 1) ---------- */
        tl.fromTo(
            revealRef.current,
            {
                clipPath: () => {
                    const m = measure();
                    return `inset(${m.top}px ${m.right}px ${m.bottom}px ${m.left}px round ${m.width * RADIUS}px / ${m.height * RADIUS}px)`;
                },
            },
            { clipPath: "inset(0px 0px 0px 0px round 0px / 0px)" },
            0
        );

        tl.fromTo(
            charRef.current,
            {
                scale: () => (measure().width / img.offsetWidth) * FIT,
                y: () => -measure().bottom,
                transformOrigin: "50% 100%",
            },
            { scale: 1, y: 0, transformOrigin: "50% 100%" },
            0
        );

        tl.to(grayRef.current, { opacity: 0, ease: "none" }, 0.1);

        tl.fromTo(
            aboutRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            0.7
        );

        /* ---------- HOLD: 1 to 1.5 (About padhne ka time) ---------- */

        /* ---------- PHASE 2: about -> skills ---------- */
        tl.addLabel("skills-start", 1.5);

        // about content upar ko fade out
        tl.to(aboutRef.current, { opacity: 0, y: -40, duration: 0.4, ease: "power2.in" }, "skills-start");

        // blue bg neeche se upar wipe hota hai (character iske upar hi rehta hai)
        tl.fromTo(
            skillsBgRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 0.8, ease: "none" },
            "skills-start"
        );

        // heading
        tl.fromTo(
            heading,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
            "skills-start+=0.6"
        );

        // tiles scramble hoke aayen
        tl.fromTo(
            tiles,
            { y: 150, opacity: 0, scale: 0.9 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.6,
                ease: "power3.out",
                stagger: { each: 0.1, from: "random" },
            },
            "skills-start+=0.7"
        );
        tl.to({}, { duration: 0.6 });
    }, { scope: stageRef });

    return (
        <div ref={stageRef} className="relative w-full h-screen overflow-hidden">
            <div className="absolute inset-0">
                <Hero />
            </div>

            <div ref={revealRef} className="absolute inset-0 z-20 overflow-hidden">
                {/* neeche se upar: about grid -> skills blue -> gray -> character */}
                <div className="absolute inset-0 bg-[url('/src/assets/images/checkbackground.jpg')] bg-cover bg-no-repeat" />
                <div
                    ref={skillsBgRef}
                    className="absolute inset-0 bg-[url('/src/assets/images/bluebg.jpg')] bg-cover bg-no-repeat"
                />
                <div ref={grayRef} className="absolute inset-0 bg-[#bdbdbd]" />
                <div ref={charRef} className="absolute inset-0">
                    <Character />
                </div>
            </div>

            <div ref={aboutRef} className="absolute inset-0 z-30 opacity-0 pointer-events-none">
                <About />
            </div>

            <div ref={skillsRef} className="absolute inset-0 z-30 pointer-events-none">
                <Skills />
            </div>
        </div>
    );
}

export default HeroAboutStage;