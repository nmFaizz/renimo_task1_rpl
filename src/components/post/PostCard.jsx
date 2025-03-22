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
                    <img src={data.user.avatar || "/sinon.jpeg"} alt="profile" width={50} />
                </figure>
                <div className="profile-info">
                    <p style={{ fontWeight: "bold" }}>{data.user.username}</p>
                    <span>{data.createdAt}</span>
                </div>

                {!isEditing && data.isEditable && (
                    <Button 
                        variant="outlined"
                        onClick={() => setIsEditing(true)}
                        leftIconSrc={"/icons/edit.svg"}
                        leftIconAlt="edit"
                        leftIconWidth={20}
                        style={{ marginLeft: "auto"}}
                    >
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
            </div>

            <div className="card-footer">
                {data.isLiked ? (
                    <Button
                        variant="unstyled"
                        leftIconSrc={"/icons/heart-fill.svg"}
                        leftIconAlt="like"
                        leftIconWidth={20}
                        onClick={() => handleLikePost(data.id)}
                    >
                        {data.likes}
                    </Button>
                ) : (
                    <Button
                        variant="unstyled"
                        leftIconSrc={"/icons/heart-outline.svg"}
                        leftIconAlt="like"
                        leftIconWidth={20}
                        onClick={() => handleLikePost(data.id)}
                    >
                        {data.likes}
                    </Button>
                )}

                <Button
                    variant="unstyled"
                    leftIconSrc={"/icons/comment-dots.svg"}
                    leftIconAlt="comment"
                    leftIconWidth={20}
                >
                    {data.comments.total}
                </Button>
                
                {data.isEditable && (
                    <Button
                        variant="unstyled"
                        onClick={() => handleDeletePost(data.id)}
                        leftIconSrc={"/icons/trash.svg"}
                        leftIconAlt="delete"
                        leftIconWidth={20}
                    >
                    </Button>
                )}

                {isEditing && (
                    <div className="save-edit-container">
                        <Button variant="primary" onClick={handleSaveEdit}>Save</Button>
                        <Button variant="outlined" onClick={handleCancelEdit}>Cancel</Button>
                    </div>
                )}
            </div>
        </div>
    );
}
