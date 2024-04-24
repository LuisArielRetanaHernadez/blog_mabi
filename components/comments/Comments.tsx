"use client"

import Image from "next/image"

import p1 from "../../public/p1.jpeg"

import Link from "next/link"

import useSWR from "swr"

import styles from "./comments.module.css"
import { useSession } from "next-auth/react"
import { useState } from "react"

interface Comments {
  id: number
  content: String
  postSlug: String
  post: String
  userEmail: String
  user: any
  createAt: Date
}

const fetcher = async (url: string): Promise<Comments[]> => {
  const res = await fetch(url)

  const data = await res.json()

  if (!res.ok) {
    const error = new Error(data.message)
    throw error
  }

  return data
}

const Comments = ({ postSlug }: any) => {
  const [desc, setDesc] = useState("")
  const { status } = useSession()

  const { data, isLoading } = useSWR(`http://localhost:3000/api/comments/postSlug=${postSlug}`, fetcher)
  
  const handleSubmit = async () => {
    await fetch("api/comments", {
      method: "POST",
      body: JSON.stringify({
        desc,
        postSlug
      }),
    })
  }
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
           className={styles.input} 
           placeholder="comments..."
           onChange={(e) => setDesc(e.target.value)}
           ></textarea>
          <button className={styles.button} onClick={handleSubmit}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
      {isLoading
          ? "loading"
          : data?.map((item) => (
              <div className={styles.comment} key={item.id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt=""
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item.user.name}</span>
                    <span className={styles.date}>{item.createAt.toString()}</span>
                  </div>
                </div>
                <p className={styles.desc}>{item.content}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments