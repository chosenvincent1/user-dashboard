import LoginForm from "@/components/auths/login-component/login-form";
import LoginImage from "@/components/auths/login-component/login-image";

export default function Login(){
    return (
        <main className="px-[20px] py-[50px] md:p-0 md:flex ">          
            <LoginForm />
            <LoginImage />
        </main>
    )
}