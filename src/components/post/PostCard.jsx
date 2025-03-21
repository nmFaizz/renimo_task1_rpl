import React from "react";
import Button from "../buttons/Button";
import { usePosts } from "../../providers/PostsProvider";
import './styles/post-card.css'

export default function PostCard({ data }) {
    const { handleDeletePost } = usePosts();

    return (
        <div className="card-container">
            <div className="card-header">
                <figure className="profile">
                    <img src="src/assets/sinon.jpeg" alt="profile" width={35}/>
                </figure>
                <div>
                    <p>{data.user.username}</p>
                    <span>{data.createdAt}</span>
                </div>
            </div>
            <div className="card-content">
                <p>{data.content}</p>
            </div>
            <div className="card-footer">
                <Button 
                    variant="primary"
                    leftIconSrc={"src/assets/icons/heart-outline.svg"}
                    leftIconAlt="like"
                    leftIconClassname="invert"
                >
                    Like
                </Button>
                <Button 
                    variant="outlined"
                    leftIconSrc={"src/assets/icons/comment-dots.svg"}
                    leftIconAlt="comment"
                    leftIconWidth={20}
                >
                    Comment
                </Button>
                <Button
                    variant="danger"
                    onClick={() => handleDeletePost(data.id)}
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}