import { StaticImageData } from "next/image";
import StoryCard from "./StoryCard";

interface dumyData {
    name: string;
    src: string | StaticImageData;
    profile: string | StaticImageData;
}

const stories: Array<dumyData> = [
    {
        name: "Kizaru",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Aokiji",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Akainu",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Garp",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Sengoku",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
];

const Stories = () => {
    return (
        <div className="flex justify-center gap-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard key={story.name} name={story.name} src={story.src} profile={story.profile} />
            ))}
        </div>
    );
};

export default Stories;
