import { DogPost } from "@/components/DogPost";
import { CreatePost } from "@/components/CreatePost";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();
  const posts = [
    {
      id: 1,
      username: "MaxTheDog",
      imageUrl: "https://images.unsplash.com/photo-1543466835-00a7907e9de1",
      caption: "Just enjoying my morning walk! 🌞",
      likes: 42,
      comments: 5,
    },
    {
      id: 2,
      username: "BellaTheHusky",
      imageUrl: "https://images.unsplash.com/photo-1587300003388-59208cc962cb",
      caption: "Beach day with my humans!",
      likes: 89,
      comments: 12,
    },
    {
      id: 3,
      username: "CharlieThePug",
      imageUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a",
      caption: "Nap time is the best time",
      likes: 76,
      comments: 8,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <header className="bg-white border-b border-gray-200 fixed top-0 w-full z-10">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <img
              src="/lovable-uploads/a4ba23b1-9dc5-4672-97b5-2164e4a6d59a.png"
              alt="Benny and Frodos Studio"
              className="h-12"
            />
            <div className="flex gap-4">
              <Button
                variant="ghost"
                className="text-dog-500 hover:text-dog-600"
                onClick={() => navigate("/login")}
              >
                Sign in
              </Button>
              <Button
                className="bg-dog-500 hover:bg-dog-600"
                onClick={() => navigate("/signup")}
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-8 max-w-2xl">
        <CreatePost />
        
        <div className="space-y-6">
          {posts.map((post) => (
            <DogPost key={post.id} {...post} />
          ))}
        </div>
      </main>
    </motion.div>
  );
};

export default Index;