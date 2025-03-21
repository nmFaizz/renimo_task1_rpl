import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostsProvider } from './providers/PostsProvider.jsx'
import './global.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostsProvider>
      <App />
    </PostsProvider>
  </StrictMode>,
)
