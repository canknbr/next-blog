import styled from './postContent.module.css';
import PostHeader from './postHeader.js';
import ReactMarkdown from 'react-markdown';
const PostContent = () => {
  const dummyData = {
    title: 'Sample1',
    image: 'cosmos.jpeg',
    content: '# first post',
    slug: 'cosmos1',
    date: '2021-11-13',
  };

  const imagePath = `/images/post/${dummyData.slug}/${dummyData.image}`;
  return (
    <article className={styled.content}>
      <PostHeader image={imagePath} title={dummyData.title} />
      <ReactMarkdown>{dummyData.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
