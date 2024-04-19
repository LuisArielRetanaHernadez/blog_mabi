import Image from "next/image"

import p1 from "../../public/p1.jpeg"

import styles from "./card.module.css"

const Card = () => {
  return (
    <div>
      <div className={styles.posts}>
        <div className={styles.imgContainer}>
          <Image src={p1} alt="image p1" fill />
        </div>
        <div className={styles.textContainer}></div>
      </div>
    </div>
  )
}

export default Card