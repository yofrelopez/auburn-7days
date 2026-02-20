export default function ImagePlaceholder({ text, className = "" }: { text: string; className?: string }) {
    return (
        <div className={`relative flex flex-col items-center justify-center bg-slate-50 border border-slate-200 rounded-lg overflow-hidden ${className}`}>
            {/* Subtle Pattern */}
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:24px_24px]"></div>

            {/* Minimal Content */}
            <div className="z-10 text-center px-6">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest">{text}</span>
            </div>
        </div>
    );
}
