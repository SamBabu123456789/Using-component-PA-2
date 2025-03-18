import React, { useState } from 'react';

function LikeButton({ isLiked }) {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button onClick={() => setLiked(!liked)}>
      {liked ? '💙' : '🖤'}
    </button>
  );
}

export default LikeButton;