import React from "react";
import InputBox from "./InputBox";
import Posts from "./Posts";
import Stories from "./Stories";

const Feed = ({ posts }: any) => {
    return (
        <div className="flex-grop h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide">
            <div
                className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl 
            "
            >
                {/* stories */}
                <Stories />
                {/* input box */}
                <InputBox />
                {/* posts */}
                <Posts posts={posts} />
            </div>
        </div>
    );
};

export default Feed;
