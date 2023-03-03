import Header from "@/components/Header";
import Head from "next/head";
import { getSession, GetSessionParams } from "next-auth/react";
import Login from "@/components/Login";
import Sidebar from "@/components/Sidebar";
import Feed from "@/components/Feed";
import Widgets from "@/components/Widgets";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export default function Home({ session, posts }: any) {
    if (!session) return <Login />;
    return (
        <div className="h-screen bg-gray-100 overflow-hidden">
            <Head>
                <title>Facebook</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Header />

            <main className="flex flex-1 w-full">
                <Sidebar />
                <Feed posts={posts} />
                <Widgets />
            </main>
        </div>
    );
}

export async function getServerSideProps(context: GetSessionParams) {
    const session = await getSession(context);
    const data = await getDocs(collection(db, "posts"));
    const docs = data.docs
        .sort((a, b) => (a > b ? -1 : 1))
        .map((post) => ({
            id: post.id,
            ...post.data(),
            timestamp: null,
        }));

    return { props: { session, posts: docs } };
}
