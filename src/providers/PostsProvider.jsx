import React, { 
    createContext, 
    useContext, 
    useState, 
    useEffect 
} from 'react';
import { defaultPosts } from '../constants/posts';
import { formatDateToCustom } from '../lib/helper';

const PostsContext = createContext();

export const usePosts = () => {
  return useContext(PostsContext);
};

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState(() => {
    const posts = localStorage.getItem('posts');
    return posts ? JSON.parse(posts) : defaultPosts;
  });
  const [postText, setPostText] = useState("");

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const handleCreatePost = (e) => {
    e.preventDefault()
    
    const newPost = {
        id: +new Date(),
        user: {
            username: "Shino Asada",
            avatar: "src/assets/sinon.jpeg",
        },
        createdAt: formatDateToCustom(new Date()),
        content: postText,
        likes: 0,
        comments: {
            total: 0,
            data: [],
        },
    }
    
    setPosts((prev) => {
        return [
            newPost,
            ...prev,
        ]
    });
  };

  const handleDeletePost = (postId) => {
    setPosts((prev) => {
        return prev.filter((post) => post.id !== postId)
    });
  };

  const handleEditPost = (post) => {

  };

  return (
    <PostsContext.Provider 
        value={{ 
            posts, 
            handleCreatePost, 
            handleDeletePost, 
            handleEditPost,
            postText,
            setPostText
        }}
    >
      {children}
    </PostsContext.Provider>
  );
};
