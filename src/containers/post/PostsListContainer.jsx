import React from "react"
import PostCard from "../../components/post/PostCard"
import './styles/posts-list.css'
import { usePosts } from "../../providers/PostsProvider";

export default function PostsListContainer() {
    const { posts } = usePosts();

    return (
        <div className="posts-list-container">
            {posts.map((post) => (
                <PostCard key={post.id} data={post} />
            ))}
        </div>
    )
}