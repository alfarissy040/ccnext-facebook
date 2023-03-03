import { CameraIcon, EllipsisHorizontalIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Contact from "./Contact";

interface contactInterface {
    name: string;
    src: string;
}

const contacts: Array<contactInterface> = [
    {
        src: "https://links.papareact.com/4zn",
        name: "Akainu",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Aokiji",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Kizaru",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Garp",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Sengoku",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Shanks",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Shiro hige",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Big Mom",
    },
    {
        src: "https://links.papareact.com/4zn",
        name: "Kaidou",
    },
];

const Widgets = () => {
    return (
        <div className="hidden lg:flex flex-col w-60 mt-5 px-3">
            <div className="flex items-center justify-between py-2">
                <p className="font-medium text-lg">Contacts</p>
                <div className="flex items-center gap-x-2">
                    <CameraIcon className="h-6" />
                    <MagnifyingGlassIcon className="h-6" />
                    <EllipsisHorizontalIcon className="h-6" />
                </div>
            </div>

            <div className="flex flex-col">
                {contacts.map((data) => (
                    <Contact key={data.name} name={data.name} src={data.src} />
                ))}
            </div>
        </div>
    );
};

export default Widgets;
