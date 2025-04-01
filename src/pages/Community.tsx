import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CommunityPost from '../components/CommunityPost';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
}

interface Post {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  comments: Comment[];
  image?: string;
}

const Community: React.FC = () => {
  // Sample data for demonstration
  const samplePosts: Post[] = [
    {
      id: 'post-1',
      author: 'Ahmed Mohammed',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      date: 'Today at 9:30 AM',
      content: 'Alhamdulillah for another blessed day of Ramadan! Today I was able to complete a full Juz of the Quran and help distribute iftar meals at our local masjid. How is everyone else spending their Ramadan?',
      likes: 24,
      comments: [
        {
          id: 'comment-1',
          author: 'Fatima Khan',
          avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
          content: "MashaAllah brother! I've been focusing on memorizing new surahs this year.",
          date: 'Today at 10:15 AM'
        },
        {
          id: 'comment-2',
          author: 'Omar Patel',
          avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
          content: "That's wonderful! Our masjid is also organizing food distribution. Maybe we can coordinate efforts.",
          date: 'Today at 11:22 AM'
        }
      ],
      image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
    },
    {
      id: 'post-2',
      author: 'Aisha Rahman',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      date: 'Yesterday at 7:45 PM',
      content: 'I found this beautiful dua for breaking fast that I wanted to share with everyone:\n\nاللهم إني لك صمت وعلى رزقك أفطرت وعليك توكلت\n\n"O Allah, I fasted for Your sake, and I break my fast with Your provision, and I rely upon You."',
      likes: 56,
      comments: [
        {
          id: 'comment-3',
          author: 'Yusuf Ali',
          avatar: 'https://randomuser.me/api/portraits/men/22.jpg',
          content: "JazakAllah khair for sharing sister. I'll add this to my daily routine.",
          date: 'Yesterday at 8:10 PM'
        }
      ]
    },
    {
      id: 'post-3',
      author: 'Ibrahim Khan',
      avatar: 'https://randomuser.me/api/portraits/men/54.jpg',
      date: '2 days ago',
      content: "Question for the community: What are your favorite suhoor meals that keep you energized throughout the day? I've been struggling with energy levels this Ramadan and could use some suggestions!",
      likes: 18,
      comments: [
        {
          id: 'comment-4',
          author: 'Maryam Hussain',
          avatar: 'https://randomuser.me/api/portraits/women/29.jpg',
          content: 'Overnight oats with dates and honey has been my go-to. I also make sure to drink plenty of water!',
          date: '2 days ago'
        },
        {
          id: 'comment-5',
          author: 'Zayn Ahmed',
          avatar: 'https://randomuser.me/api/portraits/men/77.jpg',
          content: "Eggs, whole wheat bread, and a banana has worked well for me. Don't forget to have protein!",
          date: '2 days ago'
        },
        {
          id: 'comment-6',
          author: 'Leila Mahmoud',
          avatar: 'https://randomuser.me/api/portraits/women/13.jpg',
          content: "I've found that a smoothie with dates, banana, milk and chia seeds gives me sustained energy.",
          date: '1 day ago'
        }
      ]
    }
  ];
  
  const [posts, setPosts] = useState<Post[]>(samplePosts);
  const [newPostContent, setNewPostContent] = useState('');
  
  const handleAddPost = (e: React.FormEvent) => {
    e.preventDefault();
    if (newPostContent.trim() === '') return;
    
    const newPost: Post = {
      id: `post-${Date.now()}`,
      author: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      date: 'Just now',
      content: newPostContent,
      likes: 0,
      comments: []
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };
  
  return (
    <div className="min-h-screen flex flex-col islamic-pattern-bg">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <header className="mb-10 max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-display font-bold text-ramadan-navy dark:text-white mb-4">
              Community Reflections
            </h1>
            <p className="text-ramadan-navy/70 dark:text-white/70 max-w-2xl mx-auto">
              Connect with other Muslims, share your Ramadan experiences, and inspire each other on this blessed journey.
            </p>
          </header>
          
          <div className="max-w-2xl mx-auto">
            {/* Add New Post */}
            <div className="glass-card rounded-xl p-6 mb-8">
              <h2 className="font-display text-xl font-semibold text-ramadan-navy dark:text-white mb-4">
                Share Your Thoughts
              </h2>
              <form onSubmit={handleAddPost}>
                <textarea
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  placeholder="What's on your mind during this blessed month?"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-ramadan-navy/30 text-ramadan-navy dark:text-white focus:outline-none focus:ring-1 focus:ring-ramadan-gold resize-none h-32"
                ></textarea>
                <div className="flex justify-end mt-4">
                  <button 
                    type="submit"
                    className="px-6 py-2 bg-ramadan-gold text-white font-medium rounded-lg hover:bg-ramadan-gold/90 transition-colors"
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
            
            {/* Posts */}
            <div className="space-y-6">
              {posts.map(post => (
                <CommunityPost
                  key={post.id}
                  id={post.id}
                  author={post.author}
                  avatar={post.avatar}
                  date={post.date}
                  content={post.content}
                  likes={post.likes}
                  comments={post.comments}
                  image={post.image}
                />
              ))}
              
              {/* Load More Button */}
              <div className="flex justify-center mt-8">
                <button className="px-6 py-2 border border-ramadan-navy/20 dark:border-white/20 text-ramadan-navy/80 dark:text-white/80 rounded-lg hover:bg-ramadan-navy/5 dark:hover:bg-white/5 transition-colors">
                  Load More
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;
