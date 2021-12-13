import React from 'react';
import AllPost from '../../components/post/allPost';
import { getAllPosts } from '../../lib/utils';
import Head from 'next/head';

const AllPostPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All Posts</title>
      </Head>
      <AllPost posts={posts} />
    </>
  );
};
export function getStaticProps() {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
}
export default AllPostPage;
