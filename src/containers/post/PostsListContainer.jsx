import React from "react"
import PostCard from "../../components/post/PostCard"
import './styles/posts-list.css'
import { usePosts } from "../../providers/PostsProvider";
import ModalSuccess from "../../components/modals/ModalSuccess";

export default function PostsListContainer() {
    const { posts, searchedPosts, searchText, isPosted, setIsPosted } = usePosts();

    return (
        <>
            <ModalSuccess 
                isSuccess={isPosted} 
                onClose={() => setIsPosted(false)} 
                message="Post created successfully" 
            />
            <h3 style={{marginTop: "1rem"}}>Latest post (s)</h3>
            <div className="posts-list-container">
                {(searchedPosts.length > 0 && searchText) && searchedPosts.map((post) => (
                    <PostCard key={post.id} data={post} />
                ))}

                {searchedPosts.length === 0 && searchText && (
                    <p>No posts found</p>
                )}

                {!searchText && (
                    posts.map((post) => (
                        <PostCard key={post.id} data={post} />
                    ))
                )}
            </div>
        </>
    )
}