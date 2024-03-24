import React from "react";
import MarketStoriesComponent from "./MarketStoriesComponent";

const MarketStoriesContent = () => {
  return (
    <div>
      <div className="col-span-4  md:px-2  ">
        <h2 className="  text-2xl font-bold bg-sky-900 w-full  text-white mb-1 hidden md:block md:bg-gray-300 md:text-red-500 md:w-64  ">
          MARKET STORIES
        </h2>
        <MarketStoriesComponent />
        <MarketStoriesComponent />
        <MarketStoriesComponent />
      </div>
    </div>
  );
};

export default MarketStoriesContent;
