import React from "react";
import DiscussionForumComponent from "./DiscussionForumComponent";

const DiscussionForumContent = () => {
  return (
    <div className="col-span-8 lg:ml-4  ">
      <h2 className="text-2xl font-bold  bg-sky-900 w-full text-white hidden md:block md:bg-gray-300 md:text-red-500 md:w-64  ">
        DISCUSSION FORUM
      </h2>

      <DiscussionForumComponent />
      <DiscussionForumComponent />
      <DiscussionForumComponent />
      <DiscussionForumComponent />
    </div>
  );
};

export default DiscussionForumContent;
