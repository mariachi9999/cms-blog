import React from "react";
import { getContentFragment } from "../utils";
import MiniAuthor from "./MiniAuthor";

const PostDetail = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top h-full w-full rounded-t-lg"
        />
      </div>
      <div className="px-4 lg:px-0">
        <div className="flex items-center mb-8 w-full">
          <MiniAuthor post={post} />
        </div>
      </div>
      <h1 className="mb-8 text-3xl font-semibold">{post.title}</h1>
      {/* {console.log(post.content.raw)} */}
      {post.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(item, itemIndex, item)
        );
        return getContentFragment(index, children, typeObj, typeObj.type);
      })}
    </div>
  );
};

export default PostDetail;
