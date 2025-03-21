import Header from './layouts/Header'
import CreatePost from './components/post/CreatePost'
import './App.css'
import PostsListContainer from './containers/post/PostsListContainer'

function App() {
  
  
  return (
    <main className="centered-container-lg">
      <Header />
      <CreatePost />
      <PostsListContainer />
    </main>
  )
}

export default App
