"use client"
import { useRouter } from "next/navigation"
import styles from "./pagination.module.css"

interface Props {
  page: number
  hasPrev: boolean
  hasNext: boolean
}

const Pagination = ({ page, hasPrev, hasNext }: Props) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      <button 
        className={styles.button}
        disabled={!hasPrev}
        onClick={() => router.push(`?page=${page - 1}`)}
      >Preview</button>
      <button 
        className={styles.button} 
        disabled={!hasNext}
        onClick={() => router.push(`?page=${page + 1}`)}
      >Next</button>
    </div>
  )
}

export default Pagination