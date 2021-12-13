import styled from './Hero.module.css';
import Image from 'next/image';
const Hero = () => {
  return (
    <section className={styled.hero}>
      <div className={styled.image}>
        <Image
          src="/can.jpg"
          alt="personal profil photos"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I am Can</h1>
      <p>I am a frontend developer based in Ankara, TR.</p>
    </section>
  );
};

export default Hero;
