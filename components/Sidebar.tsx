import { CalendarIcon, ChevronDownIcon, ClockIcon, ComputerDesktopIcon, ShoppingBagIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import React from "react";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
    const { data: session, status } = useSession();
    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
            <SidebarRow src={session?.user?.image} label={session?.user?.name} />
            <SidebarRow Icon={UsersIcon} label={"Friends"} />
            <SidebarRow Icon={UserGroupIcon} label={"Groups"} />
            <SidebarRow Icon={ShoppingBagIcon} label={"Marketplace"} />
            <SidebarRow Icon={ComputerDesktopIcon} label={"Watch"} />
            <SidebarRow Icon={CalendarIcon} label={"Events"} />
            <SidebarRow Icon={ClockIcon} label={"Memmories"} />
            <SidebarRow Icon={ChevronDownIcon} label={"See More"} />
        </div>
    );
};

export default Sidebar;
