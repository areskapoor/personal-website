import React from 'react';
import "./home.css";
import Me from '../../assets/avatar-1.svg';
import HeaderSocials from './HeaderSocials';

const Home = () => {
  return (
    <section className='home container' id='home'>
      <div className='intro'>
        <img src={Me} alt='' className='home__img' />
        <h1 className='home__name'>Ari Kapoor</h1>
        <span className='home__education'>
          Full-Stack Develeoper with a focus on leveraging AI and Machine 
          Learning to make people's lives better.
        </span>

        <HeaderSocials />

      </div>
    </section>
    
  )
}

export default Home