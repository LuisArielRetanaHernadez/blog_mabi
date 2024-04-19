import Link from "next/link"

import styles from "./menuCategories.module.css"

const MenuCategories = () => {
  return (
    <div className={styles.categoryList}>
      <Link className={`${styles.categoryItem} ${styles.style}`} href="/blog?cat=style">
        style
      </Link>
      <Link className={`${styles.categoryItem} ${styles.travel}`} href="/blog?cat=travel">
        Travel
      </Link>
      <Link className={`${styles.categoryItem} ${styles.food}`} href="/blog?cat=food">
        food
      </Link>
      <Link className={`${styles.categoryItem} ${styles.fashion}`} href="/blog?cat=fashion">
        fashion
      </Link>
      <Link className={`${styles.categoryItem} ${styles.culture}`} href="/blog?cat=culture">
        culture
      </Link>
      <Link className={`${styles.categoryItem} ${styles.coding}`} href="/blog?cat=coding">
        coding
      </Link>
  </div>
  )
}

export default MenuCategories