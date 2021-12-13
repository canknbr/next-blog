import styled from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <section className={styled.hero}>
      <div className={styled.image}>
        <img src={image} alt="" />
      </div>
      <h1>Hi, I'm Can</h1>
      <p>I'm a frontend developer based in Ankara, TR.</p>
    </section>
  );
};

export default Hero;
