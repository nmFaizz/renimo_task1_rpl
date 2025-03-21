import React from "react"
import Button from "../buttons/Button"
import './styles/create-post.css'
import { usePosts } from "../../providers/PostsProvider"

export default function CreatePost() {
    const { handleCreatePost, setPostText } = usePosts()

    return (
        <div className='create-post-container'>
            <form onSubmit={handleCreatePost}>
                <div className="textarea-group">
                    <figure>
                        <img src="src/assets/sinon.jpeg" alt="profile" width={35}/>
                    </figure>
                    <textarea 
                        onChange={(e) => setPostText(e.target.value)}
                        placeholder="What's happening?" 
                        maxLength={280} 
                        required
                    />
                </div>
            <Button type="submit" variant="primary">Create</Button>
            </form>
        </div>
    )
}