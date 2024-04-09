import React from 'react';
import Avatar from './Avatar';
import './Card.css'
import Bio from './Bio';
import Socials from './Socials';


function Card({children}) {
  return (
    <div className='container'>
      <div className='card'>
        {children}

        <div className='info'>
          <Bio
            name={'Michael Chandler'}
            position={'Senoir Software Engineer'}
            statement={'I am a goal driven individual, looking to use my skills to make positive imapct in the world'}

          />

        </div>

        <div className='button'>
          <button className='btn'>
            Hire me
          </button>
        </div>

             
        
      </div>
      <div className='divide'>
        <hr className='divider'/>
      </div>


      <div className='soci'>
        <Socials/>
      </div>
        

    </div>
   
  );
};

export default Card;

