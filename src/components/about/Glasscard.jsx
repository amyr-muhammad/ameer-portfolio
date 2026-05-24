function GlassCard({ children, size }) {

    const sizes = {
        small: "w-65 h-30",
        medium: "w-65 h-40",
        large: "w-65 h-50"
    }
    return (
        <div className={`backdrop-blur-[0.5px] backdrop-saturate-162 bg-[rgba(100,100,100,0.35)] rounded-xl border border-[rgba(255,255,255,0.125)] text-[#1a1a4c] ${sizes[size]} ${size === 'small' ? 'p-2' : 'p-3'}`}>
            {children}
        </div>
    );
}

export default GlassCard;