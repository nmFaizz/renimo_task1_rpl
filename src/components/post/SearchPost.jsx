import React from 'react'
import { usePosts } from '../../providers/PostsProvider'
import './styles/search-post.css'

export default function SearchPost() {
    const [searchText, setSearchText] = React.useState('')
    const { handleSearchPosts } = usePosts()

    return (
        <div className="search-post-container">
            <input 
                type="text" 
                placeholder="Search post..." 
                onChange={(e) => {
                    setSearchText(e.target.value)
                    handleSearchPosts(e.target.value)
                }}
                value={searchText}
            />
        </div>
    )
}