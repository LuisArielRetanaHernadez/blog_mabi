import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"

import styles from "./pageBlog.module.css"

const Blog = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Style Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default Blog