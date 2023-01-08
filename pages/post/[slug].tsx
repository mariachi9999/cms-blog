import React from "react";
import Author from "../../components/Author";
import Categories from "../../components/Categories";
import Comments from "../../components/Comments";
import CommentsForm from "../../components/CommentsForm";
import PostDetail from "../../components/PostDetail";
import PostWidget from "../../components/PostWidget";
import { getPosts, getPostDetails } from "../../services";

const PostDetails = ({ post }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="grid grid-cols-1 lg:grids-cols-12 gap-12">
        <div className="col-span1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span1 lg:col-span-4">
          <div className="relative lg:sticky top-8">
            <PostWidget
              slug={post.slug}
              categories={post.categories.map((category) => category.slug)}
            />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = (await getPostDetails(params.slug)) || [];

  return {
    props: { post: data },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  posts.map((post) => console.log(post.node.slug));

  return {
    paths: posts.map((post) => ({ params: { slug: post.node.slug } })),
    fallback: true,
  };
}
