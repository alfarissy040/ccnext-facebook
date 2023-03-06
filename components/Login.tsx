import { signIn } from "next-auth/react";

const Login = () => {
    return (
        <div className="w-full min-h-screen grid place-content-center">
            <div className="flex flex-col justify-center gap-y-4">
                <img src={"https://links.papareact.com/5me"} width={100} height={100} alt="Facebook icon" className="object-contain mx-auto" />
                <button className="px-5 py-2 text-white text-center shadow bg-blue-600" onClick={() => signIn("facebook")}>
                    Login with Facebook
                </button>
                <button className="px-5 py-2 text-white text-center shadow bg-zinc-900" onClick={() => signIn("github")}>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default Login;
