import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function YarnsPage(){
    return (
        <main className="stack">
            <h1>Knitting Tracker</h1>

            <SignInButton forceRedirectUrl="/yarns"/>
            <SignUpButton forceRedirectUrl="/yarns"/>
        </main>
    );
}