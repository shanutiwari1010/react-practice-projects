import { useState } from "react";
import { Heart } from "lucide-react";

function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsLiked(!isLiked);
        }}
      >
        {isLiked ? (
          <Heart color="red" size={32} /> // Change color and size as needed
        ) : (
          <Heart size={32} />
        )}
      </button>
    </div>
  );
}

export default LikeButton;
