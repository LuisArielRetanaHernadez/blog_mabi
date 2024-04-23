import CardList from "@/components/cardList/CardList"
import Menu from "@/components/menu/Menu"

import styles from "./pageBlog.module.css"

const Blog = ({ searchParams }: any) => {

  const page = searchParams.page || 1
  const { cat } = searchParams

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{cat}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default Blog