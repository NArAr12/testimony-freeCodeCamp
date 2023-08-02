import React from 'react';
import './testimony.css';

function Testimony(props) {
  return (
    <div className='container-testimony'>
      <img className='image-testimony' src= {require(`../image/testimony-${props.images}.png`)} alt= {props.name} />
      <div className='container-text-testimony'>
        <p className='name-testimony'>{props.name} in {props.country} </p>
        <p className='position-testimony'>{props.position} at <b>{props.company}</b> </p>
        <p className='text-testimony'>"{props.testimonials}"</p>
      </div>
    </div>
  );
}

export default Testimony;