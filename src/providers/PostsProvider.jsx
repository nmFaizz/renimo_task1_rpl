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
  const [searchedPosts, setSearchedPosts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isPosted, setIsPosted] = useState(false);

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts, searchedPosts]);

  const handleCreatePost = (e) => {
    e.preventDefault()

    const newPost = {
        id: +new Date(),
        user: {
            username: "Shino Asada",
            avatar: "/sinon.jpeg",
        },
        createdAt: formatDateToCustom(new Date()),
        content: postText,
        likes: 0,
        isLiked: false,
        isEditable: true,
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

    setPostText("");
    setIsPosted(true);
  };

  const handleDeletePost = (postId) => {
    setPosts((prev) => {
        return prev.filter((post) => post.id !== postId)
    });
  };

  const handleLikePost = (postId) => {
    setPosts((prev) => {
      return prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            isLiked: !post.isLiked,
            likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          };
        }
        return post;
      });
    });
    setSearchedPosts((prev) => {
        return prev.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    isLiked: !post.isLiked,
                    likes: post.isLiked ? post.likes - 1 : post.likes + 1,
                }
            }
            return post;
        })
    })
  };
  

  const handleEditPost = (postId, newText) => {
    setPosts((prev) => {
      return prev.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            content: newText,
          };
        }
        return post;
      });
    });
  };

  const handleSearchPosts = (searchText) => {
    setSearchedPosts(
        posts.filter((post) => {
            const lowerCase = post.content.toLowerCase();
            return lowerCase.includes(searchText.toLowerCase());
        })
    );
  }

  return (
    <PostsContext.Provider 
        value={{ 
            posts, 
            handleCreatePost, 
            handleDeletePost, 
            handleEditPost,
            postText,
            handleLikePost,
            setPostText,
            handleSearchPosts,
            searchedPosts,
            searchText,
            setSearchText,
            isPosted,
            setIsPosted
        }}
    >
      {children}
    </PostsContext.Provider>
  );
};
