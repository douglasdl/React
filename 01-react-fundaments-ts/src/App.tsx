import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import { Post } from "./components/Post"

import styles from "./App.module.css"
import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/douglasdl.png",
      name: "Douglas Dias Leal",
      role: "Web Developer"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 douglas.design/doctorcare"},
      { type: "hashtag", content: "#novoprojeto #nlw #rocketseat"}
    ],
    publishedAt: new Date("2022-06-30 08:28:34")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Akiyabank.png",
      name: "Akiya Bank",
      role: "Researcher"
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋"},
      { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      { type: "link", content: "👉 douglas.design/doctorcare"},
      { type: "hashtag", content: "#novoprojeto #nlw #rocketseat"}
    ],
    publishedAt: new Date("2022-07-01 09:43:31")
  },
];

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        
        <Sidebar />
    
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}