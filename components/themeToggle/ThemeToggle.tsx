import Image from "next/image"

import sun from "../../public/sun.png"
import moon from "../../public/moon.png"

import style from "./themeToggle.module.css"

const ThemeToggle = () => {
  return (
    <div className={style.container}>
      <Image src={moon} alt="mon" width={14} height={14}/>
      <div className={style.ball}></div>
      <Image src={sun} alt="sun" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle