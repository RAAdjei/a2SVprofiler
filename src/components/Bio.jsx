import React from 'react'
import './Bio.css'

// Bio component with the properties of name, position and statement
function Bio({name, position, statement}) {
  return (
    <div className='bio'>
      <h3>{name}</h3>
      <h2 className='h2'>{position}</h2> 

      <div className='brief'>
        <center>
        <p>
            {statement}
            </p> 
        </center>
      </div>
      
        

    </div>
   
  );
};

export default Bio;



