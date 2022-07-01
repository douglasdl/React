import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"
import './global.css'
import { Sidebar } from "./components/Sidebar"

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
    
        <main>
          <Post 
            author="Douglas Dias Leal"
            content="Lorem Ipsum dolor sit amet, consectet."
          />

          <Post
            author="Douglas Dias Leal"
            content="Lorem Ipsum eiusmod tempor incididunt ut labore et. Lorem Ipsum eiusmod tempor incididunt ut labore et"
          />
        </main>
      </div>
      
    </div>
  )
}