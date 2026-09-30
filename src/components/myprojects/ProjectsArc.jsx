import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
    { image: "/projects/project1.jpg" },
    { image: "/projects/project2.jpg" },
    { image: "/projects/project3.jpg" },
    { image: "/projects/project4.jpg" },
    { image: "/projects/project5.jpg" },
];

// loop ke liye list double
const items = [...projects, ...projects];

const AUTO_SPEED = 0.15;  // cards per second (bina scroll ke)
const SCROLL_BOOST = 0.0006; // scroll velocity ka asar
const ANGLE = 14;         // har step par tilt (deg)
const DROP = 22;          // arc ki gehrai (px)

export default function ProjectsArc() {
    const wrapRef = useRef(null);

    useGSAP(() => {
        const wrap = wrapRef.current;
        const cards = gsap.utils.toArray("[data-card]");
        const N = cards.length;
        const wrapOffset = gsap.utils.wrap(-N / 2, N / 2);

        let progress = 0;
        let scrollVel = 0;
        let boost = 0;
        let dragging = false;
        let visible = true;
        let gap = wrap.clientWidth * 0.2;

        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        const render = () => {
            cards.forEach((card, i) => {
                const o = wrapOffset(i - progress);
                const abs = Math.abs(o);
                gsap.set(card, {
                    x: o * gap,
                    y: o * o * DROP,
                    rotation: o * ANGLE,
                    scale: 1 - Math.min(abs, 3) * 0.03,
                    zIndex: Math.round(100 - abs * 10),
                    autoAlpha: abs > 3.2 ? 0 : 1, // door wale hide, GPU kam kaam kare
                });
            });
        };

        const tick = (time, deltaTime) => {
            if (!visible || dragging) return;
            const dt = deltaTime / 1000;
            scrollVel *= 0.9; // scroll ruke to asar khatam
            boost += (scrollVel * SCROLL_BOOST - boost) * 0.1;
            progress += ((reduce ? 0 : AUTO_SPEED) + boost) * dt;
            render();
        };

        // page scroll ki velocity, sirf jab ye section screen par ho
        ScrollTrigger.create({
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            onUpdate: (self) => (scrollVel = self.getVelocity()),
            onToggle: (self) => (visible = self.isActive),
        });

        // drag / swipe
        let lastX = 0;
        const down = (e) => { dragging = true; lastX = e.clientX; };
        const move = (e) => {
            if (!dragging) return;
            progress -= (e.clientX - lastX) / gap;
            lastX = e.clientX;
            render();
        };
        const up = () => { dragging = false; };

        wrap.addEventListener("pointerdown", down);
        window.addEventListener("pointermove", move);
        window.addEventListener("pointerup", up);

        const onResize = () => { gap = wrap.clientWidth * 0.2; render(); };
        window.addEventListener("resize", onResize);

        gsap.ticker.add(tick);
        render();

        return () => {
            gsap.ticker.remove(tick);
            wrap.removeEventListener("pointerdown", down);
            window.removeEventListener("pointermove", move);
            window.removeEventListener("pointerup", up);
            window.removeEventListener("resize", onResize);
        };
    }, { scope: wrapRef });

    return (
        <div
            ref={wrapRef}
            className="relative h-[75vh] w-full overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
        >
            {items.map((p, i) => (
                <div
                    key={i}
                    data-card
                    className="absolute left-1/2 top-10 -ml-[9vw] w-[18vw] aspect-square
                               rounded-3xl overflow-hidden bg-white/20
                               shadow-lg will-change-transform"
                >
                    <img
                        src={p.image}
                        alt=""
                        loading="lazy"
                        draggable={false}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}