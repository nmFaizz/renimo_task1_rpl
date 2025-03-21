import React, { useState } from "react";
import Button from "../buttons/Button";
import { usePosts } from "../../providers/PostsProvider";
import './styles/post-card.css'

export default function PostCard({ data }) {
    const { handleLikePost, handleDeletePost, handleEditPost } = usePosts();

    const [isEditing, setIsEditing] = useState(false);
    const [editedContent, setEditedContent] = useState(data.content); 

    const handleSaveEdit = () => {
        handleEditPost(data.id, editedContent);
        setIsEditing(false); 
    };

    const handleCancelEdit = () => {
        setEditedContent(data.content);
        setIsEditing(false);
    };

    return (
        <div className="card-container">
            <div className="card-header">
                <figure className="profile">
                    <img src={data.user.avatar || "src/assets/sinon.jpeg"} alt="profile" width={35} />
                </figure>
                <div className="profile-info">
                    <p>{data.user.username}</p>
                    <span>{data.createdAt}</span>
                </div>

                {!isEditing && (
                    <Button 
                        variant="outlined"
                        onClick={() => setIsEditing(true)}
                        style={{ marginLeft: "auto"}}
                    >
                        Edit
                    </Button>
                )}
            </div>
            
            <div className="card-content">
                {isEditing ? (
                    <textarea
                        value={editedContent}
                        onChange={(e) => setEditedContent(e.target.value)}
                        rows="4"
                        className="edit-textarea"
                    />
                ) : (
                    <p>{data.content}</p>
                )}

                <p style={{ marginTop: "2rem" }}>
                    Likes {data.likes} - Comments {data.comments.total}
                </p>
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
                ) : (
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

                {isEditing && (
                    <>
                        <Button variant="outlined" onClick={handleSaveEdit}>Save</Button>
                        <Button variant="outlined" onClick={handleCancelEdit}>Cancel</Button>
                    </>
                )}
            </div>
        </div>
    );
}
