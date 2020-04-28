import React from 'react';
import Comment from './Comment';

function Post({data}) {

  const {id, author, date, content, comments} = data;

  return (
    <div className="post">
      <div className="pheader">
        <img className="pimg" src={author.avatar} />
        <div className="pnmdt">
          <span className="pnm">{author.name}</span> <br/> 
          <span className="pdt">{date}</span>
        </div>
      </div>

      <div className="pcontent">{content.greetings}</div>
      <div className={content.text?"pcontent":"hidden"}>{content.text}</div>

      {comments.map(comment => <Comment key={comment.id} data={comment} />)}
    </div>
  );
}

export default Post;
