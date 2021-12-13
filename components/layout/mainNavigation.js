import Link from 'next/link';
import styled from './mainNav.module.css';

const mainNavigation = () => {
  return (
    <header className={styled.header}>
      <ul>
        <li>
          <Link href="/post">Post</Link>
        </li>
        <li>
          <Link href="/contact">Link</Link>
        </li>
      </ul>
    </header>
  );
};

export default mainNavigation;
