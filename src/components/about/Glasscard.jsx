function GlassCard({ children, size }) {

    const sizes = {
        square: "w-32 h-32",
        small: "w-65 h-32",
        medium: "w-65 h-42",
        large: "w-65 h-55",
        xlarge: "w-65 h-59"
    }
    return (
        <div className={`backdrop-blur-[0.5px] backdrop-saturate-162 bg-[rgba(100,100,100,0.35)] rounded-xl border border-[rgba(255,255,255,0.125)] text-[#1a1a4c] ${sizes[size]} ${size === 'small' ? 'p-2' : 'p-3'}`}>
            {children}
        </div>
    );
}

export default GlassCard;