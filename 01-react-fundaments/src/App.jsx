import { Header } from "./components/Header"
import { Post } from "./Post"
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      
      <Post 
        author="Douglas Dias Leal"
        content="Lorem Ipsum dolor sit amet, consectet."
      />

      <Post
        author="Douglas Dias Leal"
        content="Lorem Ipsum eiusmod tempor incididunt ut labore et. Lorem Ipsum eiusmod tempor incididunt ut labore et"
      />
    </div>
  )
}