import Image from "next/image"

import Link from "next/link"

import styles from "./menuPosts.module.css"

import p1 from "../../public/p1.jpeg"
import travel from "../../public/travel.png"
import culture from "../../public/culture.png"
import food from "../../public/food.png"
import fashion from "../../public/fashion.png"

interface Props {
  withImage: boolean
}

interface Post {
  id: number
  slug: string
  title: string
  description: string
  image: string
  views: number
  catSlug: string
  cat: any 
  userEmail: any 
  user: any
  comments: any 
  createAt: Date
}

// crear la funcion para obtener a los posts con mayor visualizacion
const getData = async (): Promise<Post[]> => {
  const res = await fetch('http://localhost:3000/api/posts/views/', {
    cache: 'no-store'
  })

  return await res.json()
}

const MenuPosts = async ({ withImage }: Props ) => {
  const posts = await getData()
  return (
    <div className={styles.items}>

    {posts.length && posts?.map(post => (
      <Link className={styles.item} href="/" key={post.id}>
        { withImage &&
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={post.image} alt="iamge p1" fill/>
          </div>
        }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles[post.catSlug]}`}>{post.catSlug}</span>
          <h3 className={styles.postTitle}>
            {post.title}
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe</span>
            <span className={styles.date}>10.03.2023</span>
          </div>
        </div>
    </Link>
    ))}

  </div>
  )
}

export default MenuPosts