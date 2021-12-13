import Link from 'next/link';
import styled from './mainNav.module.css';

const mainNavigation = () => {
  return (
    <header className={styled.header}>
      <div>
        <Link href="/">Home</Link>
      </div>
      <ul>
        <li>
          <Link href="/post">Post</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </header>
  );
};

export default mainNavigation;
