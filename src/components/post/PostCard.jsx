import React from "react";
import Button from "../buttons/Button";
import { usePosts } from "../../providers/PostsProvider";
import './styles/post-card.css'

export default function PostCard({ data }) {
    const { handleLikePost } = usePosts();

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

                <p style={{marginTop: "2rem"}}>Likes {data.likes} - Comments {data.comments.total}</p>
            </div>
            <div className="card-footer">
                {data.isLiked ? (
                    <Button 
                        variant="primary"
                        leftIconSrc={"src/assets/icons/heart-fill.svg"}
                        leftIconAlt="like"
                        leftIconClassname="invert"
                        onClick={() => handleLikePost(data.id)}
                    >
                        Liked
                    </Button>
                ): (
                    <Button 
                        variant="primary"
                        leftIconSrc={"src/assets/icons/heart-outline.svg"}
                        leftIconAlt="like"
                        leftIconClassname="invert"
                        onClick={() => handleLikePost(data.id)}
                    >
                        Like
                    </Button>
                )}
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