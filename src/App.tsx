// JSX = JavaScript + XML (HTML)
//JSX é um arquivo JavaScript que contem HTML
import { Post } from './layouts/Post';
import { Header } from './layouts/header';
import { Sidebar } from './layouts/Sidebar';
import styles from './App.module.css';
import './global.css';
const posts = [
  {
    id:1,
    author: {
      avatarUrl: 'https://github.com/guilhermesachinelli.png',
      name: 'Guilherme Godoy',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content:'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'link', content:'Guilherme.Desing'},
    ],
    publishedAt: new Date('2023-06-24 14:22:00')
  },
  {
    id:2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Mayk Brito',
      role: 'Web Developer',
    },
    content:[
      {type: 'paragraph', content:'Fala galera'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa.'},
      {type: 'link', content:'Guilherme.Desing'},
    ],
    publishedAt: new Date('2023-06-14 14:22:00')
  },
];

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(posts =>{
            return (<Post
            key={posts.id}
            author={posts.author}
            content={posts.content}
            publishedAt={posts.publishedAt}
            />
            )
          })}
        </main>
      </div>
    </div>
  )
}

