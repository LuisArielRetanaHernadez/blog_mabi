import React from "react"

import style from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src="..." alt="facebook" width={24} height={24}/>
        <Image src="..." alt="instgam" width={24} height={24}/>
        <Image src="..." alt="twitter" width={24} height={24}/>
        <Image src="..." alt="tiktok" width={24} height={24}/>
      </div>
      <div className={style.logo}>Lamablog</div>
      <div className={style.links}>
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">Contact</Link>
      </div>
    </div>
  )
}

export default NavBar