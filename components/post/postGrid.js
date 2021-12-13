import PostItem from './postItem.js';
import styled from './postGrid.module.css';
const PostGrid = ({ posts }) => {
  return (
    <ul className={styled.grid}>
      {posts.map(post => {
        return <PostItem key={post.slug} post={post} />;
      })}
    </ul>
  );
};

export default PostGrid;
