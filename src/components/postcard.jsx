import React from 'react';
import LikeButton from './likebutton';

function PostCard({ profileImage, username, content, isLiked }) {
  return (
    <div>
      <img src={profileImage} alt={username} width="80" height="80" />
      <h3>{username}</h3>
      <p>{content}</p>
      <LikeButton isLiked={isLiked} />
    </div>
  );
}

export default PostCard;