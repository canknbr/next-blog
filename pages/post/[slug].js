import PostContent from '../../components/post/post-detail/postContent';
import { getPostsFiles, getPostData } from '../../lib/utils.js';
const PostDetailPage = props => {
  return (
    <div>
      <PostContent post={props.posts} />
    </div>
  );
};
export const getStaticProps = context => {
  const { params } = context;
  const { slug } = params;
  const data = getPostData(slug);
  return {
    props: {
      posts: data,
    },
    revalidate: 20,
  };
};
export const getStaticPaths = async () => {
  const pathsFile = getPostsFiles();
  const slugs = pathsFile.map(paths => paths.replace(/\.md$/, ''));
  return {
    paths: slugs.map(slug => ({ params: { slug: slug } })),
    fallback: false,
  };
};
export default PostDetailPage;
