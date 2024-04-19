import Image from "next/image"

import p1 from "../../public/p1.jpeg"

import Pagination from "../pagination/Pagination"

import styles from './cardList.module.css'

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Post</h1>
      <div className={styles.posts}>
        <div className={styles.imgContainer}>
          <Image src={p1} alt="image p1" />
        </div>
        <div className={styles.textContainer}></div>
      </div>

      <Pagination />
    </div>
  )
}

export default CardList