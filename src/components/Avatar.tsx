interface AvatarProps{
    src: string,
    borderStyles?: string;
}

export default function Avatar({ src, borderStyles = "w-16 h-16 rounded-full border-2 ring-4 ring-purple-l border-cream-white"}:AvatarProps) {
    return (
        <img
            src={src}
            className={`z-0 ${borderStyles}`}
        />
    )
}

