import Header from './layouts/Header'
import CreatePost from './components/post/CreatePost'
import PostsListContainer from './containers/post/PostsListContainer'
import SearchPost from './components/post/SearchPost'
import './App.css'

function App() {

  
  return (
    <main className="centered-container-lg">
      <Header />
      <CreatePost />
      <SearchPost />
      <PostsListContainer />
    </main>
  )
}

export default App
