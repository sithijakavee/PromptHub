"use client";

import AboutDetails from "@/components/about/AboutDetails";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";

const ContactRouter = ({
  user,
  isSellerExist,
}: {
  user: User | undefined;
  isSellerExist: boolean;
}) => {
  return (
    <>
      <div className="shop-banner">
        <Header activeItem={2} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="About Us" />
      </div>
      <div>
        <AboutDetails />

        <Footer />
      </div>
    </>
  );
};

export default ContactRouter;
