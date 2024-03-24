import React from "react";
import Image from "next/image";
import { title, content } from "../data/MarketStoriesData";

const MarketStoriesComponent = () => {
  return (
    <div className="border-solid border-2 w-80  md:mb-2 ">
      <Image
        src="/sunset.avif"
        className="h-36 w-80 object-cover"
        width={500}
        height={500}
      />
      <h1 className="font-bold text-left md:px-2">{title}</h1>
      <p className="text-left text-sm md:px-2">{content}</p>
    </div>
  );
};

export default MarketStoriesComponent;
