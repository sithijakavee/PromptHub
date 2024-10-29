"use client";
import { styles } from "@/utils/styles";
import { Button } from "@nextui-org/react";
import { useState } from "react";

const categories = ["All", "Chatgpt", "Midjourney", "Bard", "Dalle"];

type Props = {
  totalPrompts: any;
  setPrompts: (prompts: any) => void;
};

const FilterPrompt = ({ totalPrompts, setPrompts }: Props) => {
  const [selected, setSelected] = useState("All");

  const handleFilter = (e: any) => {
    setSelected(e);
    if (e === "All") {
      setPrompts(totalPrompts);
    } else {
      const data = totalPrompts?.filter((prompt: any) => prompt.category === e);
      setPrompts(data);
    }
  };

  return (
    <div className="w-full flex rounded shadow md:overflow-x-hidden gap-5 overflow-y-hidden py-3">
      {categories.map((i, index) => (
        <Button
          className={`h-[32px] rounded-2xl w-[150px] min-w-[150px] ${
            selected === i ? "bg-[#3ab05b]" : "bg-[#2251ac]"
          }`}
          key={index}
          onClick={(e) => handleFilter(i)}
        >
          <p className={`${styles.paragraph} text-white`}>{i}</p>
        </Button>
      ))}
      <br />
    </div>
  );
};

export default FilterPrompt;
