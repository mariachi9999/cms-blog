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
    author: {
      name: string;
      photo: {
        url: string;
      };
    };
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
      </div>
      <h1 className="transition duration-100 text-center mb-8 cursor-pinter hover:text-pink-g00 text-3xl font-semibold">
        <Link href={`/post/${props.post.slug}`}>{props.post.title}</Link>
      </h1>
      <div className="block lg:flex ext-center items-center justify-center mb-8 w-full">
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
          <img
            alt={props.post.author.name}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={props.post.author.photo.url}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
