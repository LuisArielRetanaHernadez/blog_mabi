import Link from "next/link"

import Image from "next/image"

import style from "../../public/style.png"
import fashion from "../../public/fashion.png"
import food from "../../public/food.png"
import travel from "../../public/travel.png"

import styles from "./categoryList.module.css"

interface Category {
  id: number
  image: string
  slug: string
  title: string
  Posts: []
}

const getData = async (): Promise<Category[]> => {
  const response = await fetch("http://localhost:3000/api/category", {
    cache: "no-store",
  }).then((res) => res.json())
  
  return response
}

const CategoryList = async () => {

  const data = await getData()

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Category</h1>
      <div className={styles.categories}>
        {
          data?.map(category => (
          <Link key={category.id} className={`${styles.category} ${styles[category.slug]}`} href={`/blog?cat=${category.slug}`}>
            <Image className={styles.image} src={category.image} alt="imagen style" width={32} height={32} />
            {category.title}
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export default CategoryList