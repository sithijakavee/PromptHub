import { SignUp } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up | Prompt Hub",
  description: "Sign Up | Best Prompt Marketplace",
  keywords: ["marketplace", "prompt", "prompt Hub sign up", "Ai images prompts","Ai Images"]  
};
export default function Page() {
  return(
    <div className="w-full h-screen flex items-center justify-center imgBg">
   <SignUp />
    </div>
   );
}