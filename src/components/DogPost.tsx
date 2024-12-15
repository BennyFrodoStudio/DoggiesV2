import { useState } from "react";
import { Heart, MessageSquare, PawPrint } from "lucide-react";
import { motion } from "framer-motion";

interface DogPostProps {
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  username: string;
}

export const DogPost = ({ imageUrl, caption, likes, comments, username }: DogPostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 transition-transform duration-300 hover:shadow-md"
    >
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="bg-dog-200 p-2 rounded-full">
            <PawPrint className="w-4 h-4 text-dog-500" />
          </div>
          <span className="font-medium text-gray-900">{username}</span>
        </div>
      </div>
      
      <div className="relative aspect-square">
        <img
          src={imageUrl}
          alt="Dog post"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <div className="flex items-center space-x-4 mb-4">
          <button
            onClick={handleLike}
            className="flex items-center space-x-1 transition-colors duration-200"
          >
            <Heart
              className={`w-6 h-6 transition-colors duration-200 ${
                isLiked ? "fill-dog-500 text-dog-500" : "text-gray-600"
              }`}
            />
            <span className="text-sm text-gray-600">{likeCount}</span>
          </button>
          
          <button className="flex items-center space-x-1">
            <MessageSquare className="w-6 h-6 text-gray-600" />
            <span className="text-sm text-gray-600">{comments}</span>
          </button>
        </div>

        <p className="text-gray-800">{caption}</p>
      </div>
    </motion.div>
  );
};