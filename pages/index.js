import React from 'react';
import FeaturedPost from '../components/homePage/FeaturedPost.js';
import Hero from '../components/homePage/Hero.js';
const HomePage = () => {
  const dummyData = [
    {
      title: 'Sample1',
      image: 'cosmos.jpeg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque.',
      slug: 'cosmos1',
      date: '2021-11-13',
    },
    {
      title: 'Sample2',
      image: 'cosmos.jpeg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque.',
      slug: 'cosmos2',
      date: '2021-11-13',
    },
    {
      title: 'Sample3',
      image: 'cosmos.jpeg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque.',
      slug: 'cosmos3',
      date: '2021-11-13',
    },
    {
      title: 'Sample4',
      image: 'cosmos.jpeg',
      excerpt:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, atque.',
      slug: 'cosmos4',
      date: '2021-11-13',
    },
  ];
  return (
    <>
      <Hero />
      <FeaturedPost posts={dummyData} />
    </>
  );
};

export default HomePage;
