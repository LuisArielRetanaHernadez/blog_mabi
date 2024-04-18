import React from "react"

import style from "./navbar.module.css"
import Image from "next/image"
import Link from "next/link"

import facebook from "../../public/socials/facebook.png"
import instagram from "../../public/socials/instagram.png"
import tiktok from "../../public/socials/tiktok.png"
import youtube from "../../public/socials/youtube.png"

import AuthLink from "../authLink/AuthLink"
import ThemeToggle from "../themeToggle/ThemeToggle"

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
        <ThemeToggle />
        <Link className={style.link} href="/">Home</Link>
        <Link className={style.link} href="/">About</Link>
        <Link className={style.link} href="/">Contact</Link>
        <AuthLink />
      </div>
    </div>
  )
}

export default NavBar