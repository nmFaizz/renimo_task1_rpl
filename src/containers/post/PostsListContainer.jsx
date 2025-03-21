import React from "react"
import PostCard from "../../components/post/PostCard"
import './styles/posts-list.css'
import { usePosts } from "../../providers/PostsProvider";

export default function PostsListContainer() {
    const { posts, searchedPosts } = usePosts();

    return (
        <>
            <h3 style={{marginTop: "1rem"}}>Latest post (s)</h3>
            <div className="posts-list-container">
                {searchedPosts.length > 0 ? searchedPosts.map((post) => (
                    <PostCard key={post.id} data={post} />
                )) : (
                    posts.map((post) => (
                        <PostCard key={post.id} data={post} />
                    ))
                )}
               
            </div>
        </>
    )
}