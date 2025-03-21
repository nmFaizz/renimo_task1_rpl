export const getPosts = () => {
    const posts = localStorage.getItem('posts')
    return posts ? JSON.parse(posts) : []
}

export const createPost = (post) => {
    const posts = getPosts()
    posts.push(post)
    localStorage.setItem('posts', JSON.stringify(posts))
    return posts
}

export const editPost = (post) => {
    const posts = getPosts()
    const index = posts.findIndex((p) => p.id === post.id)
    posts[index] = post
    localStorage.setItem('posts', JSON.stringify(posts))
}

export const deletePost = (postId) => {
    const posts = getPosts()
    const updatedPosts = posts.filter((post) => post.id !== postId)
    localStorage.setItem('posts', JSON.stringify(updatedPosts))
    return updatedPosts
}

export const createComment = (comment, postId) => {
    const posts = getPosts()
    const index = posts.findIndex((p) => p.id === postId)
    posts[index].comments.data.push(comment)
    localStorage.setItem('posts', JSON.stringify(posts))
}

export const likePost = (postId) => {
    const posts = getPosts()
    const index = posts.findIndex((p) => p.id === postId)
    posts[index].likes++
    localStorage.setItem('posts', JSON.stringify(posts))
}