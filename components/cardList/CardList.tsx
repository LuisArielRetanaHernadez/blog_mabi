import Pagination from "../pagination/Pagination"

import styles from './cardList.module.css'
import Card from "../card/Card"

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

const getData = async (page: number): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3000/aapi/posts?page=${page}`, {
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return res.json()
}

const CardList = async ({ page }: any) => {

  const data = await getData(page)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {data?.map(post => (
          <Card key={post.id} post={post}/>
        )
        )}
      </div>
      <Pagination />
    </div>
  )
}

export default CardList