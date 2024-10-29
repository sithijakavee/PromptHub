"use client";

import ContactDetails from "@/components/contact/ContactDetails";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import ShopBanner from "@/components/Shop/ShopBanner";
import { User } from "@clerk/nextjs/server";


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
        <Header activeItem={3} user={user} isSellerExist={isSellerExist} />
        <ShopBanner title="Contact Us" />
      </div>

      <div>
        <ContactDetails/>
      </div>

      <Footer />
      
    </>
  );
};

export default AboutRouter;
