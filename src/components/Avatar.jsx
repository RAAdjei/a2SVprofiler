import React from 'react';
import './Avatar.css';
import profileImage from '../assets/img1.jpg';
import avatarImage from '../assets/ava.jpg';

export default function Avatar({person, size, isPicture}) {
  return (
    
    <div className='circular-frame'>
      {isPicture ? (
        <img src= {profileImage} 
        alt={person.name}
        width = {size}
        height = {size}
        className='profile-image'></img>
      ) : (
      <img src= {avatarImage} 
        alt={person.name}
        width = {size}
        height = {size}
        className='profile-image'></img>

      )}
      
      

    </div>
   
  );
};

