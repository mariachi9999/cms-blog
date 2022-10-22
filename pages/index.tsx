import type { NextPage } from "next";
import Head from "next/head";
import Categories from "../components/Categories";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import PostWidget from "../components/PostWidget";
import { getPosts } from "../services";

// const posts = [
//   { title: "React Testing", excerpt: "Learn React Testing" },
//   {
//     title: "React Testing with Tailwind",
//     excerpt: "Learn React Testing with Tailwind",
//   },
// ];

const Home: NextPage = ({ posts }) => {
  return (
    <div className="container mx-auto px-10 mb-8">
      <Head>
        <title>Lifelearner Tips</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 ">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, index) => (
            <PostCard post={post} key={post.title}></PostCard>
          ))}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  console.log(posts);

  return {
    props: { posts },
  };
}
