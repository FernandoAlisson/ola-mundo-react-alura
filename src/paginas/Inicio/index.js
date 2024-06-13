import styles from './Inicio.module.css'
import Post from 'componentes/PostCard'
import posts from 'json/posts.json'

function Inicio() {
  return (
    <ul className={styles.posts}>
      {posts.map(post => (
        <li key={post.id}>
          <Post post={post} />
        </li>
      ))}
    </ul>
  )
}

export default Inicio
