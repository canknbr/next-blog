import styled from './postContent.module.css';
import PostHeader from './postHeader.js';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
const PostContent = props => {
  const { post } = props;
  const imagePath = `/images/post/${post.slug}/${post.image}`;
  const customRenderers = {
    image(image) {
      return (
        <Image
          src={`images/posts/${post.slug}/${image.url}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
  };
  return (
    <article className={styled.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
