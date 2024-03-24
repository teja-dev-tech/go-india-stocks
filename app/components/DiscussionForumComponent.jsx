"use client";
import React from "react";
import ChatBubbleLeftIcon from "@heroicons/react/24/outline/ChatBubbleLeftIcon.js";
import ShareIcon from "@heroicons/react/24/outline/ShareIcon.js";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon.js";
import { IoEyeOutline } from "react-icons/io5";
import {
  imgSource,
  title,
  content,
  likes,
  views,
  comments,
  lastViewed,
} from "../data/DiscussionForumData";

const DiscussionForumComponent = () => {
  return (
    <div className="flex gap-2 border-solid border-2 my-3  p-1 md:p-3 lg:w-5/6   ">
      <div>
        <img
          className="rounded-full w-10 h-10 object-cover object-top"
          src={imgSource}
          alt="Profile picture"
        />
      </div>
      <div className="flex  flex-col gap-1 ">
        <div className="flex gap-2">
          <p className="font-medium text-xl">{title}</p>
          <button
            type="button"
            class="text-white bg-sky-900 hover:bg-blue-950 ml-2  rounded-full text-sm px-3 "
          >
            Sector2
          </button>
        </div>

        <p className="text-black-700 ">{content}</p>
        <div className="flex justify-between md:justify-between  items-center text-black ">
          <span className="flex items-center">
            <HeartIcon className="h-6 w-6" />
            <p>{likes}</p>
          </span>
          <span className="flex items-center">
            <IoEyeOutline className="h-6 w-6 " />
            <p>{views}</p>
          </span>
          <span className="flex flex-row items-center">
            <ChatBubbleLeftIcon className="h-6 w-6 " />
            <p>{comments} comments</p>
          </span>
          <span className="flex items-center ">
            <ShareIcon className="h-6 w-6 " />
            <p>share</p>
          </span>
        </div>
      </div>
      <div>
        <p className=" text-blue-500 text-sm ">{lastViewed}</p>
      </div>
    </div>
  );
};

export default DiscussionForumComponent;
