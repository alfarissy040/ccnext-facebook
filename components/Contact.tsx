import Image, { StaticImageData } from "next/image";

interface contactProps {
    name: string;
    src: StaticImageData | string;
}

const Contact = ({ src, name }: contactProps) => {
    return (
        <div
            className="flex items-center gap-x-3 relative hover:bg-zinc-200 cursor-pointer rounded-xl p-2
    "
        >
            <Image src={src} alt={`${name}'s profile image`} className="rounded-full object-cover h-10 w-10" width={52} height={52} />
            <p>{name}</p>
            <div className="absolute bottom-2 left-7 bg-green-400 w-3 h-3 rounded-full"></div>
        </div>
    );
};

export default Contact;
