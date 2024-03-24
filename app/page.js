import React from "react";
import Sidebar from "./components/Sidebar";
import DiscussionForumContent from "./components/DiscussionForumContent";
import MarketStoriesContent from "./components/MarketStoriesContent";
import SmallScreenLayout from "./components/SmallScreenLayout";

export default function Home() {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex    ">
          <Sidebar />
          <div className=" lg:px-4">
            <div className="grid grid-cols-1  md:grid-cols-12">
              <DiscussionForumContent />
              <MarketStoriesContent />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <SmallScreenLayout />
      </div>
    </div>
  );
}
