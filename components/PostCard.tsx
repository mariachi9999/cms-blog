import React from "react";
import moment from "moment";
import Link from "next/link";

interface Post {
  post: {
    title: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    slug: string;
  };
}

const PostCard: React.FC<Post> = (props: Post) => {
  console.log(props.post);

  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img
          src={props.post.featuredImage.url}
          alt={props.post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
        <h1 className="transaition duration-700 text-center mb-8 cursor-pinter hover:text-pink-g00 text-3xl font-semibold">
          <Link href={`/post/${props.post.slug}`}>{props.post.title}</Link>
        </h1>
      </div>
    </div>
  );
};

export default PostCard;
