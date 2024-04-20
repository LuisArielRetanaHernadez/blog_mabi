import Menu from "@/components/menu/Menu"

import Image from "next/image"

import p1 from '../.././public/p1.jpeg'

import styles from './singlePage.module.css'
import Comments from "@/components/comments/Comments"

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.informationContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>perspiciatis eligendi repellendus accusamus facilis blanditiis</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image className={styles.avatar} src={p1} alt="image p1" fill/>
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}> 
          <Image className={styles.image} src={p1} alt="imge p1" fill />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi dolor 
              ut non vel! Pariatur fugiat laudantium tempore, ea voluptate perferendis 
              ad? Quos ut odit, aspernatur voluptas totam assumenda! Expedita!
              Ullam ratione excepturi laboriosam voluptatibus optio labore architecto 
              ducimus dolorum at a hic et perferendis vero, tempore doloremque quidem 
              repellat quia consequuntur rerum repellendus nihil. Ipsam veniam 
              culpa veritatis aut.
            </p>
            <h2>Lorem ipsum dolor sit amet consectetur</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi dolor 
              ut non vel! Pariatur fugiat laudantium tempore, ea voluptate perferendis 
              ad? Quos ut odit, aspernatur voluptas totam assumenda! Expedita!
              Ullam ratione excepturi laboriosam voluptatibus optio labore architecto 
              ducimus dolorum at a hic et perferendis vero, tempore doloremque quidem 
              repellat quia consequuntur rerum repellendus nihil. Ipsam veniam 
              culpa veritatis aut.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo quasi dolor 
              ut non vel! Pariatur fugiat laudantium tempore, ea voluptate perferendis 
              ad? Quos ut odit, aspernatur voluptas totam assumenda! Expedita!
              Ullam ratione excepturi laboriosam voluptatibus optio labore architecto 
              ducimus dolorum at a hic et perferendis vero, tempore doloremque quidem 
              repellat quia consequuntur rerum repellendus nihil. Ipsam veniam 
              culpa veritatis aut.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default SinglePage