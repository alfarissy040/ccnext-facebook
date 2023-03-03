import React from "react";

const HeaderIcon = ({ Icon, active }: any) => {
    return (
        <div className="cursor-pointer md:px-10 sm:h-14 md:hover:bg-zinc-100 flex items-center rounded-xl active:border-b-2 active:border-blue-500 group">
            <Icon className={`h-5 sm:h-6  group-hover:text-blue-500 ${active ? "text-blue-500" : "text-zinc-500"}`} />
        </div>
    );
};

export default HeaderIcon;
