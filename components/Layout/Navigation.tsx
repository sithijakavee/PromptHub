import Link from "next/link";
import React from "react";

type Props = {
  activeItem: number;
};

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Marketplace",
    href: "/marketplace",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Contact Us",
    href: "/contact",
  },
  // {
  //   title: "Policy",
  //   href: "/policy",
  // },
];

const Navigation = ({ activeItem }: Props) => {
  return (
    <div className="flex flex-col md:flex-row">
      {navItems.map((item, index) => (
        <Link key={item.title} href={item.href}>
          <h5
            className={`inline-block md:px-4 xl:px-8 py-5 md:py-0 text-[18px] font-[500] font-Inter ${
              activeItem === index && "text-primary font-bold"
            }`}
          >
            {item.title}
          </h5>
        </Link>
      ))}
    </div>
  );
};

export default Navigation;
