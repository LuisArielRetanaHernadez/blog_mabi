"use client"
import Image from "next/image"

import sun from "../../public/sun.png"
import moon from "../../public/moon.png"

import style from "./themeToggle.module.css"

import { useContext } from "react"

import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext)

  return (
    <div className={style.container} onClick={toggle}>
      <Image src={moon} alt="mon" width={14} height={14}/>

      <div className={style.ball} style={
        theme === "dark"
        ? { left: 1, backgroundColor: "#0f172a" } :
        { right: 1, backgroundColor: "white" }  
      }></div>

      <Image src={sun} alt="sun" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle