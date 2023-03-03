import Image, { StaticImageData } from "next/image";
import { FlagIcon, HomeIcon, MagnifyingGlassIcon, PlayIcon, ShoppingCartIcon, UserGroupIcon, ChatBubbleLeftIcon, BellIcon, ChevronDownIcon, Squares2X2Icon } from "@heroicons/react/24/solid";
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
    const { data: session, status } = useSession();

    return (
        <header className="flex items-center p-1 md:p-2 lg:px-5 sticky top-0 z-50 shadow-md">
            {/* left */}
            <div className="flex items-center ">
                <Image src={"https://links.papareact.com/5me"} width={40} height={40} alt="Facebook icon" />
                <label htmlFor="search" className="items-center ml-2 rounded-full bg-zinc-200 p-2 hidden sm:inline-flex">
                    <span>
                        <MagnifyingGlassIcon className="h-6 text-zinc-600" />
                    </span>
                    <input type="search" name="search" id="search" placeholder="Search facebook" className="hidden md:inline-flex bg-transparent ml-2 items-center placeholder-zinc-500 flex-shrink focus:outline-none" />
                </label>
            </div>

            {/* center */}
            <div className="flex items-center justify-center flex-grow">
                <div
                    className="flex items-center gap-x-6 md:gap-x-2
                "
                >
                    <HeaderIcon active={true} Icon={HomeIcon} />
                    <HeaderIcon active={false} Icon={FlagIcon} />
                    <HeaderIcon active={false} Icon={PlayIcon} />
                    <HeaderIcon active={false} Icon={ShoppingCartIcon} />
                    <HeaderIcon active={false} Icon={UserGroupIcon} />
                </div>
            </div>
            {/* right */}
            <div className="flex items-center sm:gap-x-2 justify-end">
                <Image src={`${session?.user?.image}`} alt={`${session?.user?.name} profile picture`} className={"rounded-full"} width={32} height={32} />
                <p className="font-semibold whitespace-nowrap pr-3 hidden lg:inline-flex">{session?.user?.name}</p>
                <Squares2X2Icon className="icon" />
                <ChatBubbleLeftIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" onClick={() => signOut()} />
            </div>
        </header>
    );
};

export default Header;
