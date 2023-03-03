import { ChatBubbleBottomCenterIcon, HandThumbUpIcon, ShareIcon } from "@heroicons/react/24/solid";
import { Timestamp } from "firebase/firestore";
import Image, { StaticImageData } from "next/image";

interface postProps {
    name: String;
    message: String;
    timestamp: Timestamp;
    image: StaticImageData;
    postImage: StaticImageData;
}

const Post = ({ name, message, timestamp, image, postImage }: postProps) => {
    return (
        <div className="rounded-t-2xl bg-white shadow-md">
            <div className="px-4 py-2">
                <div className="flex items-center gap-x-2">
                    <Image src={image} alt={`${name}'s profile image`} className="w-10 h-10 object-cover rounded-full" width={40} height={40} />
                    <div className="flex flex-col">
                        <p className="font-medium">{name}</p>
                        {timestamp ? <small className="text-zinc-400 text-xs">{new Date(timestamp?.toDate()).toLocaleString()}</small> : <small className="h-4 w-28 bg-zinc-300 animate-pulse"></small>}
                    </div>
                </div>
                <p className="pt-3">{message}</p>
            </div>
            {postImage && (
                <div className="relative h-56 md:h-96 bg-white flex justify-center">
                    <Image src={postImage} alt={`${name}'s posted image`} className="h-full object-contain" height={384} width={384} />
                </div>
            )}

            {/* footer of post */}
            <div className="flex justify-between items-center rounded-b-2xk bg-white shadow-md text-zinc-400 border-t">
                {/* like */}
                <div className="inputIcon">
                    <HandThumbUpIcon className="h-4" />
                    <p className="text-xs sm:text-base">Like</p>
                </div>
                {/* comment */}
                <div className="inputIcon">
                    <ChatBubbleBottomCenterIcon className="h-4" />
                    <p className="text-xs sm:text-base">Comment</p>
                </div>
                {/* share */}
                <div className="inputIcon">
                    <ShareIcon className="h-4" />
                    <p className="text-xs sm:text-base">Share</p>
                </div>
            </div>
        </div>
    );
};

export default Post;
