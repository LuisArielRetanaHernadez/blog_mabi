import Image from "next/image"

import p1 from "../../public/p1.jpeg"

import styles from "./card.module.css"
import Link from "next/link"

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image className={styles.image} src={p1} alt="image p1" fill />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.datail}>
          <span className={styles.date}>11.02.2023 - </span>
          <span className={styles.category}>CULTURE</span>
        </div>
        <Link href="/">
          <h1>Ad, veritatis accusamus similique hic sapiente tempore? Veniam itaque magnam delectus reiciendis quo</h1>
        </Link> 
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime, sapiente similique 
          accusamus illo repellat quis aliquam fugiat vel, debitis cupiditate molestiae perspiciatis 
          corrupti? Error aperiam, commodi nisi recusandae autem illo.
        </p>
        <Link className={styles.link} href="/">Read More</Link>
      </div>
    </div>
  )
}

export default Card