
import React, { useState } from 'react';

interface Comment {
  id: string;
  author: string;
  avatar: string;
  content: string;
  date: string;
}

interface CommunityPostProps {
  id: string;
  author: string;
  avatar: string;
  date: string;
  content: string;
  likes: number;
  comments: Comment[];
  image?: string;
}

const CommunityPost: React.FC<CommunityPostProps> = ({
  id,
  author,
  avatar,
  date,
  content,
  likes,
  comments,
  image
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [postComments, setPostComments] = useState(comments);

  const toggleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() === '') return;
    
    const comment: Comment = {
      id: `comment-${Date.now()}`,
      author: 'You',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
      content: newComment,
      date: 'Just now'
    };
    
    setPostComments([...postComments, comment]);
    setNewComment('');
  };

  return (
    <div className="bg-white dark:bg-ramadan-navy/30 rounded-xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md">
      <div className="p-5">
        <div className="flex items-center space-x-3 mb-4">
          <img 
            src={avatar} 
            alt={author} 
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h4 className="font-medium text-ramadan-navy dark:text-white">{author}</h4>
            <p className="text-xs text-ramadan-navy/60 dark:text-white/60">{date}</p>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-ramadan-navy dark:text-white/90 whitespace-pre-line">{content}</p>
        </div>
        
        {image && (
          <div className="mb-4 -mx-5">
            <img 
              src={image} 
              alt="Post" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center space-x-6">
            <button 
              onClick={toggleLike}
              className={`flex items-center space-x-1 text-sm ${
                isLiked 
                  ? 'text-ramadan-gold' 
                  : 'text-ramadan-navy/70 dark:text-white/70 hover:text-ramadan-gold dark:hover:text-ramadan-gold'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>
              <span>{likeCount}</span>
            </button>
            
            <button 
              onClick={toggleComments}
              className="flex items-center space-x-1 text-sm text-ramadan-navy/70 dark:text-white/70 hover:text-ramadan-navy dark:hover:text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span>{postComments.length}</span>
            </button>
          </div>
          
          <button className="text-sm text-ramadan-navy/70 dark:text-white/70 hover:text-ramadan-navy dark:hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
              <polyline points="16 6 12 2 8 6"></polyline>
              <line x1="12" y1="2" x2="12" y2="15"></line>
            </svg>
          </button>
        </div>
      </div>
      
      {showComments && (
        <div className="bg-gray-50 dark:bg-ramadan-navy/50 p-4 animate-fade-in">
          <h5 className="font-medium text-sm mb-3 text-ramadan-navy/80 dark:text-white/80">Comments</h5>
          
          <div className="space-y-4 mb-4 max-h-56 overflow-y-auto scrollbar-hide">
            {postComments.map(comment => (
              <div key={comment.id} className="flex space-x-3">
                <img 
                  src={comment.avatar} 
                  alt={comment.author} 
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="bg-white dark:bg-ramadan-navy/30 rounded-lg p-3">
                    <div className="flex justify-between items-start">
                      <span className="font-medium text-sm text-ramadan-navy dark:text-white">{comment.author}</span>
                      <span className="text-xs text-ramadan-navy/60 dark:text-white/60">{comment.date}</span>
                    </div>
                    <p className="text-sm text-ramadan-navy/80 dark:text-white/80 mt-1">{comment.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleAddComment} className="flex space-x-2">
            <input
              type="text"
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-ramadan-navy/30 text-ramadan-navy dark:text-white focus:outline-none focus:ring-1 focus:ring-ramadan-gold"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-ramadan-gold text-white text-sm font-medium rounded-lg hover:bg-ramadan-gold/90 transition-colors"
            >
              Post
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommunityPost;
