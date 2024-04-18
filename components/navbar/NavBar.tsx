import React from "react"

import style from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"

import facebook from "../../assets/socials/facebook.png"
import instagram from "../../assets/socials/instagram.png"
import tiktok from "../../assets/socials/tiktok.png"
import youtube from "../../assets/socials/youtube.png"

const NavBar = () => {
  return (
    <div className={style.container}>
      <div className={style.social}>
        <Image src={facebook} alt="facebook" width={24} height={24}/>
        <Image src={instagram} alt="instgam" width={24} height={24}/>
        <Image src={tiktok} alt="tiktok" width={24} height={24}/>
        <Image src={youtube} alt="youtube" width={24} height={24}/>
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