import React from 'react';
import FeaturedPost from '../components/homePage/FeaturedPost.js';
import Hero from '../components/homePage/Hero.js';
import { getFeaturedPosts } from '../lib/utils.js';
const HomePage = ({ posts }) => {
  return (
    <>
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
