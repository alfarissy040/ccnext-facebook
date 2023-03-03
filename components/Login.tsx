import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

const Login = () => {
    return (
        <div className="w-full min-h-screen grid place-content-center">
            <div className="flex flex-col justify-center gap-y-4">
                <img src={"https://links.papareact.com/5me"} width={100} height={100} alt="Facebook icon" className="object-contain mx-auto" />
                <h1 className="px-5 py-2 text-white text-center rounded-full shadow cursor-pointer bg-blue-600" onClick={() => signIn()}>
                    Login with Facebook
                </h1>
            </div>
        </div>
    );
};

export default Login;
