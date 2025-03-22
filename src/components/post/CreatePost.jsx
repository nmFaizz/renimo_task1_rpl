import React from "react"
import Button from "../buttons/Button"
import './styles/create-post.css'
import { usePosts } from "../../providers/PostsProvider"

export default function CreatePost() {
    const { handleCreatePost, setPostText, postText } = usePosts()

    return (
        <div className='create-post-container'>
            <form onSubmit={handleCreatePost}>
                <div className="textarea-group">
                    <figure>
                        <img src="/sinon.jpeg" alt="profile" width={35}/>
                    </figure>
                    <textarea 
                        onChange={(e) => setPostText(e.target.value)}
                        placeholder="What's happening?" 
                        maxLength={280}
                        value={postText} 
                        required
                    />
                </div>
            <Button 
                type="submit" 
                variant="primary"
                className="post-button"
            >
                Post
            </Button>
            </form>
        </div>
    )
}