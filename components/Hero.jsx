import React from 'react';
import Heroimg from '../public/Images/heroimg.jpg'
import style from '../styles/landingpage.module.css'
// import Logo from './Logo';

const Hero = () => (
  <div>
    <div className={style.slogan}>

    <div className={style.finder}>
        <h1>The tourist's special <br /> place to enjoy<br /> the air of Qatar.</h1>
        <p>Search Confidently With your Trusted Source of</p>
        <p>Homes for Sale or Rent</p>
        <button>View Homes</button>
    </div>
    <div className={style.guyhome}>
      <img src={Heroimg.src} alt="guy at home" />
    </div>

  </div>
</div>

);

export default Hero;
