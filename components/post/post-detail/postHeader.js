import Image from 'next/image';
import styled from './postHeader.module.css';
const postHeader = ({ title, image }) => {
  return (
    <header className={styled.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default postHeader;
