import React from 'react'
import './Socials.css'
import twit from '../assets/twitter.svg';
import instaPic from '../assets/instagram.svg';
import faceb from '../assets/facebook.svg';
import linked from '../assets/linkedin.svg';

function Socials() {
  return (
    <div className='soc'>
        <div className='twitter'>
        <img src= {twit} alt='profile' className='tweet'></img>
      </div>


      <div className='facebook'>
      <img src= {faceb} alt='profile' className='face'></img>

      </div>

      <div className='instagram'>
        <img src= {instaPic} alt='profile' className='insta'></img>

      </div>

      <div className='linkedin'>
        <img src= {linked} alt='profile' className='link'></img>

      </div>
    </div>
  );
};

export default Socials;
