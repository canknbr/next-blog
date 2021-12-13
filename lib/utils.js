import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
const postDirectory = path.join(process.cwd(), 'posts');

const getPostData = post => {
  const postPath = path.join(postDirectory, post);
  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);
  const postSlug = post.replace(/\.md$/, '');
  const postData = {
    slug: postSlug,
    ...data,
    content,
  };
  return postData;
};
const getAllPosts = () => {
  const postFile = fs.readFileSync(postDirectory);

  const allFile = postFile.map(post => {
    return getPostData(post);
  });
  const sortFile = allFile.sort((a, b) => {
    return b.date - a.date;
  });
  return sortFile;
};

export const getFeaturedPosts = () => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => {
    return post.featured === true;
  });
  return featuredPosts;
};
