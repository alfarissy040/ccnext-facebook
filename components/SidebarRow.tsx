import Image, { StaticImageData } from "next/image";

interface AppProps {
    Icon?: React.ForwardRefExoticComponent<React.SVGProps<SVGSVGElement>>;
    src?: string | StaticImageData | null;
    label?: String | null;
}

const SidebarRow = ({ Icon, src, label }: AppProps) => {
    return (
        <div className="flex items-center gap-x-2 p-4 hover:bg-zinc-200 rounded-xl cursor-pointer">
            {src && <Image className={"object-cover rounded-full"} src={src} alt={`${label}`} width={32} height={32} />}
            {Icon && <Icon className="w-5 h-5 md:w-8 md:h-8 text-blue-500" />}
            <p className="hidden sm:inline-flex font-medium">{label}</p>
        </div>
    );
};

export default SidebarRow;
