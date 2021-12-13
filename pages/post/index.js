import React from 'react';
import AllPost from '../../components/post/allPost';
import { getAllPosts } from '../../lib/utils';

const AllPostPage = ({ posts }) => {
  return (
    <>
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
