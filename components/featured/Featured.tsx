import Image from "next/image"

import style from "./featured.module.css"

const Featured = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>
        <b>Hey, Lam dev here!</b> Discover my stories and creative ideas
      </h1>
      <div className={style.post}>
        <div className={style.imgContainer}>
        </div>
        <div className={style.textContainer}>
         <h1 className={style.postTitle}>adipisicing elit. Pariatur saepe natus cumque amet totam possimus, hic ea neque assumenda, beatae in consequatur dicta dolorem</h1>
          <p className={style.description}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Similique assumenda magnam nesciunt sequi recusandae minus 
            quo illum qui! Laudantium adipisci repudiandae assumenda!
            Magnam voluptate nesciunt neque nostrum odio ad fuga.
          </p>
          <button className={style.button}>Read Mored</button>
        </div>
      </div>
    </div>
  )
}

export default Featured