import Image from "next/image"

import Link from "next/link"

import styles from "./menuPosts.module.css"

import p1 from "../../public/p1.jpeg"
import travel from "../../public/travel.png"
import culture from "../../public/culture.png"
import food from "../../public/food.png"
import fashion from "../../public/fashion.png"

interface Props {
  withImage: boolean
}

const MenuPosts = ({ withImage }: Props ) => {
  return (
    <div className={styles.items}>

    <Link className={styles.item} href="/">
      { withImage &&
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={p1} alt="iamge p1" fill/>
        </div>
      }
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.travel}`}>Travel</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>Jhon Doe</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link className={styles.item} href="/">
      { withImage &&
          <div className={styles.imageContainer}>
          <Image className={styles.image} src={fashion} alt="iamge p1" fill/>
        </div>
      }

      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.fashion}`}>fashion</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>Jhon Doe</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link className={styles.item} href="/">
      { withImage &&
          <div className={styles.imageContainer}>
          <Image className={styles.image} src={culture} alt="iamge p1" fill/>
        </div> 
      }
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.culture}`}>culture</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>Jhon Doe</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </div>
    </Link>

    <Link className={styles.item} href="/">
      { withImage &&
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={food} alt="iamge p1" fill/>
        </div>
      }
      <div className={styles.textContainer}>
        <span className={`${styles.category} ${styles.food}`}>food</span>
        <h3 className={styles.postTitle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit
        </h3>
        <div className={styles.detail}>
          <span className={styles.username}>Jhon Doe</span>
          <span className={styles.date}>10.03.2023</span>
        </div>
      </div>
    </Link>

  </div>
  )
}

export default MenuPosts