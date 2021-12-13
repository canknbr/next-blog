import PostGrid from '../post/postGrid';
import styled from './FeaturedPost.module.css';
const FeaturedPost = ({ posts }) => {
  return (
    <section className={styled.latest}>
      <h2>Featured Post</h2>
      <PostGrid posts={posts} />
    </section>
  );
};

export default FeaturedPost;
