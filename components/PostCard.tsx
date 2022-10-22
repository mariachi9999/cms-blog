import React from "react";
import moment from "moment";

interface Post {
  post: {
    title: string;
    excerpt: string;
  };
}

const PostCard: React.FC<Post> = (props: Post) => {
  return (
    <div>
      {props.post.title}
      {props.post.excerpt}
    </div>
  );
};

export default PostCard;
