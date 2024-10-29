"use client";

import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";
import { Divider, Pagination } from "@nextui-org/react";
import { useEffect, useState } from "react";
import FilterPrompt from "@/components/Prompts/FilterPrompt";
import { useRouter } from "next/navigation";
import PromptCard from "@/components/Prompts/PromptCard";
import PromptCardLoader from "@/utils/PromptCardLoader";

const AboutRouter = ({
  user,
  isSellerExist,
}: {
  user: User | undefined;
  isSellerExist: boolean;
}) => {
  

  return (
    <>
      <div className="shop-banner">
        <Header activeItem={1} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="About Us" />
      </div>
      
    </>
  );
};

export default AboutRouter;
