import React from 'react';
import FeaturedPost from '../components/homePage/FeaturedPost.js';
import Hero from '../components/homePage/Hero.js';
import { getFeaturedPosts } from '../lib/utils.js';
import Head from 'next/head';

const HomePage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Can Blog</title>
        <meta name="description" content="Can's Blog" />
      </Head>
      <Hero />
      <FeaturedPost posts={posts} />
    </>
  );
};
export function getStaticProps() {
  const posts = getFeaturedPosts();
  return {
    props: {
      posts: posts,
    },
    revalidate: 60,
  };
}

export default HomePage;
