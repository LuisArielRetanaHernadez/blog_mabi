import Link from "next/link"

import styles from "./menu.module.css"

import MenuPosts from "../menuPosts/MenuPosts"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Waht's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className={styles.subtitle}>Discovery by topic</h2>
      <h1 className={styles.title}>Categories</h1>
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

      <h2 className={styles.subtitle}>Chosen</h2>
      <h1 className={styles.title}>Edit pick</h1>
      <MenuPosts withImage={true}/>
    </div>
  )
}

export default Menu