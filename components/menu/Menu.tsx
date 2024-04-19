import Link from "next/link"

import styles from "./menu.module.css"

import Image from "next/image"

import p1 from "../../public/p1.jpeg"

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"Waht's hot"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link className={styles.item} href="/">
          <div className={styles.imageContainer}>
            <Image className={styles.image} src={p1} alt="iamge p1" fill/>
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          </div>
          <h3>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit
          </h3>
          <div className={styles.detail}>
            <span className={styles.username}>Jhon Doe</span>
            <span className={styles.date}>10.03.2023</span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu