import Link from "next/link"

import Image from "next/image"

import style from "../../public/style.png"
import fashion from "../../public/fashion.png"
import food from "../../public/food.png"
import travel from "../../public/travel.png"

import styles from "./categoryList.module.css"

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
          <Image src={style} alt="imagen style" width={32} height={32} />
          style
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
          <Image src={fashion} alt="imagen style" width={32} height={32} />
          fashin
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
          <Image src={food} alt="imagen style" width={32} height={32} />
          food
        </Link>
        <Link className={`${styles.category} ${styles.style}`} href="/blog?cat=style">
          <Image src={travel} alt="imagen style" width={32} height={32} />
          travel
        </Link>
      </div>
    </div>
  )
}

export default CategoryList