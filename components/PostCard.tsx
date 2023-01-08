import React from "react";
import moment from "moment";
import Link from "next/link";
import Image from "next/image";

import { grpahCMSImageLoader } from "../utils";
import { Post } from "../types";
import MiniAuthor from "./MiniAuthor";

const PostCard: React.FC<Post> = (props: Post) => {
  const { post } = props;

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-100 text-center mb-8 cursor-pinter hover:text-pink-g00 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <MiniAuthor post={post} />
      <p className="text-center text-lg text-gray-700 font-normal px-4 lg: px-20 mb-8">
        {post.excerpt}
      </p>
      <div className="text-center">
        <Link href={`/post/${post.slug}`}>
          <span className="transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 font-medium rounded-full text-white px-8 py-3 cursor-pointer">
            Continue Reading
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
