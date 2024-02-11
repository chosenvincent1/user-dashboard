import SignupImage from "@/components/auths/signup-component/signup-image";
import SignupForm from "@/components/auths/signup-component/signup-form";

export default function SignUp() {
    return (
        <main className="px-[20px] py-[50px] md:p-0 md:flex ">
            <SignupImage />
            <SignupForm />
        </main>
    )
}