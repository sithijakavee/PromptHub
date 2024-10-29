"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import line from "@/public/Assets/line.png";
import MarQuee from "react-fast-marquee";

type Props = {};

const rowOneImages = [
  {
    url: "/Assets/hero/1.jfif",
  },
  {
    url: "/Assets/hero/2.jfif",
  },
  {
    url: "/Assets/hero/3.jfif",
  },
  {
    url: "/Assets/hero/4.jfif",
  },
  {
    url: "/Assets/hero/5.jfif",
  },

  
];

const rowTwoImages = [
  {
    url: "/Assets/hero/6.jfif",
  },
  {
    url: "/Assets/hero/7.jfif",
  },
  {
    url: "/Assets/hero/8.jfif",
  },
  {
    url: "/Assets/hero/9.jfif",
  },
  {
    url: "/Assets/hero/10.jfif",
  },
];

const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center">
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          Make <span className="text-primary">Ai Image</span> <br /> With Your
          <br /> Imagination
        </h1>
        <div className="md:mt-5">
          <Image
            src={line}
            alt=""
            className="absolute hidden md:block"
            width={2000}
            height={2}
          />
        </div>
        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[150px] h-[150px] m-2 md:w-[250px] md:h-[250px] rounded-[20px] object-cover"
                  width={200}
                  height={100}
                />
              ))}
            </MarQuee>
            <MarQuee>
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[150px] h-[150px] m-2 md:w-[250px] md:h-[250px] rounded-[20px] object-cover"
                  width={200}
                  height={100}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
