/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
"use client"

import Image from "next/image"

import styles from "./write.module.css"

import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"

import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { app } from "@/utils/firabase"

import image from "../../public/image.png"
import external from "../../public/external.png"
import plus from "../../public/plus.png"
import video from "../../public/video.png"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
  const storage = getStorage(app);
const Write = () => {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const [title, setTitle] = useState<String>("")
  const [file, setFile] = useState<File | null>(null)
  const [catSlug, setCatSlug] = useState<String>("")
  const [media, setMedia] = useState<String>("")

  const { status } = useSession()

  const router = useRouter()


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

    const data = await res.json()
  }

  useEffect(() => {

    const upload = (filePost: File) => {
      const fileName = new Date().getTime() + filePost.name;
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, filePost);

      // Register three observers:
      // 1. 'state_changed' observer, called any time the state changes
      // 2. Error observer, called on failure
      // 3. Completion observer, called on successful completion
      uploadTask.on('state_changed', 
        (snapshot) => {
          // Observe state change events such as progress, pause, and resume
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        }, 
        (error) => {
          // Handle unsuccessful uploads
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
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

  if (status === "unauthenticated") {
    router.push("/login")
  }

  if (status === "loading") {
    return <p>Loading...</p>
  }



  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <select name="" id="" onChange={e => setCatSlug(e.target.value)}>
        <option value="style">style</option>
        <option value="fashion">fashion</option>
        <option value="food">food</option>
        <option value="travel">travel</option>
        <option value="culture">culture</option>
        <option value="coding">coding</option>
      </select>
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setOpen(prev => !prev)}>
          <Image src={plus} alt="image" width={16} height={16} />
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
                <Image src={image} alt="image" width={16} height={16} />
              </label>
            </button>

            <button className={styles.addButton}>
              <Image src={external} alt="image" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src={video} alt="image" width={16} height={16} />
            </button>
          </div>
        )}

        <ReactQuill className={styles.textArea} theme="bubble" value={value} onChange={setValue} placeholder="write stori"/>
      </div>
      <button className={styles.publish} onClick={handleSubmit}>Publish</button>
    </div>
  )

}

export default Write