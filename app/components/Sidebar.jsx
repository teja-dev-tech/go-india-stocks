"use client";
import React, { useState } from "react";
import { FaCaretRight } from "react-icons/fa";
import UserIcon from "@heroicons/react/20/solid/UserIcon.js";
import BellIcon from "@heroicons/react/20/solid/BellIcon.js";
import ChatBubbleBottomCenterTextIcon from "@heroicons/react/24/outline/ChatBubbleBottomCenterTextIcon.js";
import CurrencyDollarIcon from "@heroicons/react/24/outline/CurrencyDollarIcon.js";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-dvh">
      <button className="order-2 " onClick={toggleSidebar}>
        <FaCaretRight
          className="h-20 w-2 text-white  bg-sky-900 size-2"
          size="2"
        />
      </button>
      {isOpen && (
        <div className=" bg-gray-700 text-white  overflow-y-auto px-4 py-2 w-60 md:w-60 lg:w-72">
          <div className="flex justify-around py-4">
            <UserIcon className="h-10 w-10" /> <h2>Hello User</h2>
            <BellIcon className="h-10 w-10" />
          </div>
          <hr />
          <ul className="space-y-2 py-4">
            <li>
              <div className="flex items-center gap-2 hover:bg-blue-950 ">
                <ChatBubbleBottomCenterTextIcon className="h-8 w-8" />
                <p>Discussion Forum</p>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2 hover:bg-blue-950 ">
                <CurrencyDollarIcon className="h-8 w-8" />
                <p>Market Stories</p>
              </div>
            </li>
            <li className="hover:bg-blue-950 py-1 px-9">Sentiment</li>
            <li className="hover:bg-blue-950 py-1 px-9">Market</li>
            <li className="hover:bg-blue-950 py-1 px-9">Sector</li>
            <li className="hover:bg-blue-950 py-1 px-9">Watchlist</li>
            <li className="hover:bg-blue-950 py-1 px-9">Events</li>
            <li className="hover:bg-blue-950 py-1 px-9">News/Interview</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
