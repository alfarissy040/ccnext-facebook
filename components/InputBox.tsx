import { CameraIcon, FaceSmileIcon, VideoCameraIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { collection, addDoc, serverTimestamp, setDoc, doc } from "firebase/firestore";
import { db, storage } from "@/firebase";
import { getDownloadURL, ref, UploadResult, uploadString } from "firebase/storage";

const InputBox = () => {
    const { data: session } = useSession();
    const inputRef = useRef<HTMLInputElement>(null);
    const filePickerRef = useRef<HTMLInputElement>(null);
    const [imageToPost, setImageToPost] = useState(null);

    const addImageToPost = (event: FormEvent<HTMLInputElement>) => {
        const reader = new FileReader();
        if (event.currentTarget.files) {
            reader.readAsDataURL(event.currentTarget.files[0]);
        }
        reader.onload = (readerEvent: any) => {
            setImageToPost(readerEvent.target.result);
        };
    };

    const removeImage = () => {
        setImageToPost(null);
    };

    const sendPost = async (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!inputRef.current?.value) return;

        const docRef = await addDoc(collection(db, "posts"), {
            message: inputRef.current?.value,
            name: session?.user?.name,
            email: session?.user?.email,
            image: session?.user?.image,
            timestamp: serverTimestamp(),
        }).then((document) => {
            const storageRef = ref(storage, `posts/${document.id}`);
            if (imageToPost) {
                // const uploadTask: Promise<UploadResult> = uploadString(storageRef, imageToPost, "data_url");
                uploadString(storageRef, imageToPost, "data_url").then(() => {
                    // when the upload completes
                    removeImage();
                    getDownloadURL(storageRef).then((url) => {
                        setDoc(
                            doc(db, "posts", document.id),
                            {
                                postImage: url,
                            },
                            { merge: true }
                        );
                    });
                });
            }
        });
        inputRef.current.value = "";
    };
    return (
        <div className="bg-white px-4 py-3 rounded-2xl shadow-md text-zinc-500 font-medium mt-6">
            <form className="flex flex-1 items-center gap-x-2">
                <Image className="rounded-full object-cover w-10 h-10" src={`${session?.user?.image}`} alt={`${session?.user?.name + "`s"} profile image`} width={40} height={40} />
                <input type="text" placeholder={`What's on your mind, ${session?.user?.name}`} className="rounded-full bg-zinc-100 flex-1 h-12 px-5 focus:outline-none" ref={inputRef} />
                {imageToPost && (
                    <div className="relative h-10 filter hover:brightness-110 transform hover:scale-105 cursor-pointer duration-150 transition group" onClick={removeImage}>
                        <img src={imageToPost} alt="image" className="object-contain h-full" />
                        <p className="text-zinc-900 font-bold absolute hidden group-hover:inline w-full h-full inset-0 text-center self-center bg-white opacity-0 group-hover:opacity-100 transition-all duration-200">Remove</p>
                    </div>
                )}
                <button type="submit" onClick={sendPost} hidden>
                    submit
                </button>
            </form>
            <div className="flex items-center justify-center w-full gap-x-3 py-2 px-3 mt-2 border-t">
                {/* live */}
                <div className="inputIcon">
                    <VideoCameraIcon className="h-7 text-red-500" />
                    <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
                </div>
                {/* image/video */}
                <div className="inputIcon" onClick={() => filePickerRef.current?.click()}>
                    <CameraIcon className="h-7 text-emerald-400" />
                    <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
                    <input ref={filePickerRef} type="file" onChange={addImageToPost} hidden />
                </div>
                {/* caption */}
                <div className="inputIcon">
                    <FaceSmileIcon className="h-7 text-yellow-300" />
                    <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
                </div>
            </div>
        </div>
    );
};

export default InputBox;
