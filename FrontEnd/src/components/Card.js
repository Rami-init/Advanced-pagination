import React from 'react';

const Card = ({post}) => {
    const {body, author, title} = post
  return <div className='post-card'>
      <h4>{title}</h4>
      <span>{author}</span>
      <p>{body}</p>
  </div>;
};

export default Card;
