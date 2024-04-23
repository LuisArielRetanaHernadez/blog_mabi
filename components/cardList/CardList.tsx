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

const getData = async (page: number, cat: string): Promise<Post[]> => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}&cat=${cat || ""}`, {
    cache: "no-store"
  }).then(res => res.json())

  return res
}

const CardList = async ({ page, cat }: {page: number, cat: string}) => {
  const data = await getData(page, cat)

  const postsShow = 2

  const hasPrev = postsShow * (page - 1) > 0
  const hasNext = postsShow * page + postsShow < data.length

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        {data?.length ?? data?.map(post => (
          <Card key={post.id} post={post}/>
        )
        )}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext}/>
    </div>
  )
}

export default CardList