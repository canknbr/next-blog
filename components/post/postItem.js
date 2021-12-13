import Image from 'next/image';
import Link from 'next/link';
import styled from './postItem.module.css';
import { useState } from 'react';
const PostItem = ({ post }) => {
  const [isShow, setIsShow] = useState(false);
  const { title, image, excerpt, slug, date } = post;
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    day: 'numeric',
    month: 'long',
  });
  const imagePath = `/images/post/${slug}/${image}`;
  const linkPath = `/post/${slug}`;
  return (
    <li className={styled.post}>
      <Link href={linkPath}>
        <a>
          <div className={styled.image}>
            <Image src={imagePath} alt={title} width={320} height={200} />
          </div>
          <div className={styled.content}>
            <h3>{title}</h3>
            <time>{formattedDate}</time>
            <p>{isShow ? excerpt : `${excerpt.substring(0, 200)}...`}</p>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default PostItem;
