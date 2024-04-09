// The Component displays the profile picture

import React from 'react';
import './Avatar.css';
import profileImage from '../assets/img1.jpg';
import avatarImage from '../assets/ava.jpg';

export default function Avatar({person, size, isPicture}) {
  return (
    //If the user does not provide a profile pic, and avatar pic will be rendered
    //profile picture
    <div className='circular-frame'>
      {isPicture ? (
        <img src= {profileImage} 
        alt={person.name}
        width = {size}
        height = {size}
        className='profile-image'></img>
      ) : (
        //avatar image
      <img src= {avatarImage} 
        alt={person.name}
        width = {size}
        height = {size}
        className='profile-image'></img>

      )}
      
      

    </div>
   
  );
};

