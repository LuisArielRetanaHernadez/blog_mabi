import Menu from "@/components/menu/Menu"

import Image from "next/image"

import p1 from '../../../public/p1.jpeg'

import styles from './singlePage.module.css'
import Comments from "@/components/comments/Comments"

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
  createdAt: Date 
}

const getData = async (slug: string): Promise<Post> => {
  const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    cache: 'no-store'
  }).then(res => res.json())

  return res
}

const SinglePage = async ({ params }: any) => {
  const { slug } = params;

  const data = await getData(slug)

  return (
    <div className={styles.container}>
      <div className={styles.informationContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data.title}</h1>
          <div className={styles.user}>
            {data.image && (
              <div className={styles.userImageContainer}>
                <Image className={styles.avatar} src={data.user.image} alt="image p1" fill/>
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>{data.createdAt.toString()}</span>
            </div>
          </div>
        </div>
        { data.image && (
          <div className={styles.imageContainer}> 
            <Image className={styles.image} src={data.image} alt="imge p1" fill />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.description }} />
          <div className={styles.comment}>
            <Comments slug={slug}/>
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage