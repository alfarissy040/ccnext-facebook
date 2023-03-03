import Image, { StaticImageData } from "next/image";

interface Props {
    name: string;
    src: string | StaticImageData;
    profile: string | StaticImageData;
}

const StoryCard = ({ name, src, profile }: Props) => {
    return (
        <div className="relative h-14 w-14 md:w-20 md:h-20 lg:h-56 lg:w-36 cursor-pointer duration-200 transform ease-in hover:scale-105 hover:animate-pulse">
            <Image className="absolute opacity-0 lg:opacity-100 rounded-full z-50 inset-4 object-cover w-10 h-10" src={profile} alt={`${name} profiile pcture`} width={40} height={40} />
            <Image className="object-cover filter brightness-75 rounded-full lg:rounded-3xl w-full h-full" src={src} alt={`${name + "`"}s Story`} width={300} height={300} />
            <p className="font-medium text-white absolute bottom-4 w-full text-center z-50">{name}</p>
        </div>
    );
};
export default StoryCard;
