import Image from "next/image"

import p1 from "../../public/p1.jpeg"

import styles from "./card.module.css"
import Link from "next/link"

interface Props {
  post: any
  key: number
}

const Card = ({key, post}: Props) => {
  return (
    <div className={styles.container} key={key}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={post.image} alt="image p1" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.datail}>
          <span className={styles.date}>{post.date.substring(0, 10)}</span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href="/">
          <h1>Ad, veritatis accusamus similique hic sapiente tempore? Veniam itaque magnam delectus reiciendis quo</h1>
        </Link> 
        <p className={styles.description}>
          {post.description}
        </p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>
    </div>
  )
}

export default Card