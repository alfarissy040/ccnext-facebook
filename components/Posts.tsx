import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import React from "react";
import { db } from "@/firebase";
import Post from "./Post";

const Posts = ({ posts }: any) => {
    const [realtimePosts, loading, error] = useCollection(collection(db, "posts"));

    return (
        <div className="space-y-4 my-4">
            {realtimePosts
                ? realtimePosts?.docs
                      .sort((a, b) => (a > b ? -1 : 1))
                      .map((post) => <Post key={post.id} name={post.data().name} message={post.data().message} timestamp={post.data().timestamp} image={post.data().image} postImage={post.data().postImage} />)
                : posts.map((post: any) => <Post key={post.id} name={post.name} message={post.message} timestamp={post.timestamp} image={post.image} postImage={post.postImage} />)}
        </div>
    );
};

export default Posts;
