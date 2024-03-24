"use client";

import React, { useState } from "react";
import Sidebar from "./Sidebar";
import DiscussionForumContent from "./DiscussionForumContent";
import MarketStoriesContent from "./MarketStoriesContent";

const SmallScreenLayout = () => {
  const [activeContent, setActiveContent] = useState("discussionForum");

  const handleContentChange = (newContent) => {
    setActiveContent(newContent);
  };
  return (
    <div className="flex relative">
      <div className="z-10">
        <Sidebar />
      </div>
      <div className="absolute left-0">
        <div className="flex justify-between mb-4">
          <h2
            className={`text-2xl font-bold bg-sky-900 w-full text-white cursor-pointer ${
              activeContent === "discussionForum"
                ? "md:bg-gray-300 md:text-red-500"
                : ""
            }`}
            onClick={() => handleContentChange("discussionForum")}
          >
            DISCUSSION FORUM
          </h2>
          <h2
            className={`text-2xl font-bold bg-sky-900 w-full text-white cursor-pointer   ${
              activeContent === "marketStories"
                ? "md:bg-gray-300 md:text-red-500"
                : ""
            }`}
            onClick={() => handleContentChange("marketStories")}
          >
            MARKET STORIES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12">
          {activeContent === "discussionForum" && <DiscussionForumContent />}
          {activeContent === "marketStories" && <MarketStoriesContent />}
        </div>
      </div>
    </div>
  );
};

export default SmallScreenLayout;
