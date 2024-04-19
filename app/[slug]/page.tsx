import Menu from "@/components/menu/Menu"

import Image from "next/image"

import styles from './singlePage.module.css'

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.informationContainer}>
        <div className={styles.textContainer}>
          <h1>perspiciatis eligendi repellendus accusamus facilis blanditiis</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image className={styles.image} src='' alt="image p1" />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Jhon Doe</span>
              <span className={styles.date}>01.01.2023</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}> 
          <Image className={styles.image} src='' alt="imge p1" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default SinglePage