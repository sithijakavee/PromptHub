import { Metadata } from "next";
import MarketPlaceRouter from "./_page";
import { getUser } from "@/actions/user/getUser";

export const metadata: Metadata = {
  title: "Marketplace | Prompt Hub",
  description: "Prompt Hub Marketplace is a place to buy and sell AI image prompts",
  keywords: ["marketplace", "prompt", "prompt Hub Marketplace", "Ai images prompts","Ai Images"]  
};

const Page = async () => {
  const data = await getUser();
  
  return (
    <div>
      <MarketPlaceRouter
        user={data?.user}
        isSellerExist={data?.shop ? true : false}
      />
    </div>
  );
};

export default Page;
