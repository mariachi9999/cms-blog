import React from "react";

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
