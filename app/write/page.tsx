"use client"

import Image from "next/image"

import styles from "./write.module.css"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

import { useState } from "react"

const Write = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Title" />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(prev => !prev)}>
          <Image src='' alt="image" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.button}>
              <Image src='' alt="image" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src='' alt="image" width={16} height={16} />
            </button>
            <button className={styles.button}>
              <Image src='' alt="image" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill theme="bubble" value={value} onChange={setValue} placeholder="write stori"/>
      </div>
    </div>
  )

}

export default Write