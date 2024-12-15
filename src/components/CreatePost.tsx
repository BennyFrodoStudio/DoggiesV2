import { useState } from "react";
import { Camera } from "lucide-react";
import { motion } from "framer-motion";

export const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-sm p-4 mb-6"
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="bg-dog-200 p-2 rounded-full">
          <Camera className="w-5 h-5 text-dog-500" />
        </div>
        <h2 className="text-lg font-medium text-gray-900">Create Post</h2>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="What's your pup up to?"
            className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-dog-500 resize-none"
            rows={3}
          />
        </div>

        <div className="relative">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="block w-full p-8 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-dog-500 transition-colors duration-200"
          >
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Preview"
                className="max-h-64 mx-auto rounded-lg"
              />
            ) : (
              <div className="text-center">
                <Camera className="mx-auto w-8 h-8 text-gray-400 mb-2" />
                <p className="text-gray-500">Click to upload an image</p>
              </div>
            )}
          </label>
        </div>

        <button className="w-full bg-dog-500 text-white py-2 px-4 rounded-lg hover:bg-dog-600 transition-colors duration-200">
          Post
        </button>
      </div>
    </motion.div>
  );
};