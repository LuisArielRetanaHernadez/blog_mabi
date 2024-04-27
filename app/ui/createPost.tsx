/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Image from "next/image"

import styles from "./createPost.module.css"
import { useEffect, useState } from "react"
import ReactQuill from "react-quill"
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage"
import { app } from "@/utils/firabase"

const categories = ["style", "fashion", "food", "travel", "culture", "coding"]

const createPost = async () => {
  const [open, setOpen] = useState<Boolean>(false)
  const [value, setValue] = useState<String>("")
  const [title, setTitle] = useState<String>("")
  const [file, setFile] = useState<File | null>(null)
  const [catSlug, setCatSlug] = useState<String>("")
  const [media, setMedia] = useState<String>("")

  useEffect(() => {
    const storage = getStorage(app);

    const upload = (filePost: File) => {
      const fileName = new Date().getTime() + filePost.name;
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, filePost);

      uploadTask.on('state_changed', 
        (snapshot) => {
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {}, 
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL)
          });
        }
      );
    }
    
    if (file) {
      upload(file)
    }
  }, [file])

  const slugify = (str: String): String =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title,
        description: value,
        image: media,
        slug: slugify(title),
        catSlug: catSlug || "style"
      })

    })

  }

  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <select className={styles.select} name="" id="" onChange={e => setCatSlug(e.target.value)}>
        {categories.map(category => (
          <option value={category} key={category}>{category}</option>
        ))}
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(prev => !prev)}>
          <Image src='' alt="image" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <input 
            type="file" 
            id="image" 
            onChange={e => {
              if (e.target.files) {
                setFile(e.target.files[0])
              }
            }} 
            style={{ display: "none" }}
            />

            <button className={styles.addButton}>        
              <label htmlFor="image">
                <Image src='' alt="image" width={16} height={16} />
              </label>
            </button>

            <button className={styles.addButton}>
              <Image src='' alt="image" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src='' alt="image" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill
          className={styles.textArea} 
          theme="bubble" 
          value={value} 
          onChange={setValue}
          placeholder="write stori"
        />
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
  </div>
  )
}

export default createPost