import React from 'react';

function Comment({data}) {
  const {id, author, content} = data;

  return (
    <div className="comment">
      <img className="cimg" src={author.avatar} />

      <div className="ccontent">
        <span className="cname">{author.name + " "}</span>
        <span>{content}</span>
      </div>
    </div>
  );
  
}

export default Comment;
