import React from 'react';
import PostGrid from './postGrid';
import styled from './allPost.module.css';
const AllPost = ({ posts }) => {
  return (
    <section className={styled.posts}>
      <h1>All Post</h1>
      <PostGrid posts={posts} />
    </section>
  );
};

export default AllPost;
