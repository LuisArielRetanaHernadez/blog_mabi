"use client"

import Image from "next/image"

import p1 from "../../public/p1.jpeg"

import Link from "next/link"

import useSWR from "swr"

import styles from "./comments.module.css"
import { useSession } from "next-auth/react"

const fetcher = async (url: string) => {
  const res = await fetch(url)

  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }

  return res
}

const Comments = ({ postSlug }: any) => {
  const { status } = useSession()

  const { data, isLoading } = useSWR(`http://localhost:3000/api/comments/postSlug=${postSlug}`)
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea className={styles.input} placeholder="comments..."></textarea>
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image className={styles.image} src={p1} alt="image p1" width={50} height={50} />
            <div className={styles.userInformation}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Sapiente nihil labore officiis dolor fuga porro obcaecati 
            debitis quod quaerat. Doloribus aut hic ipsa ipsam vero natus 
            autem, exercitationem adipisci nihil?
            Quibusdam officia mollitia fugit nam accusamus, fugiat 
            dolorum illum ad aliquid repellendus quaerat explicabo 
            vel, repellat quae porro sint cum a eius? Modi, laudantium. 
            Voluptate magni vitae reiciendis quaerat asperiores.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Comments