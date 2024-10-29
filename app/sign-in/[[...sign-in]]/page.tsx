import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In | Prompt Hub",
  description: "Sign In | Best Prompt Marketplace",
  keywords: ["marketplace", "prompt", "prompt Hub sign in", "Ai images prompts","Ai Images"]  
};
export default function Page() {
  return (
    <div className="w-full h-screen flex items-center justify-center imgBg">
      <SignIn />
    </div>
  );
}
