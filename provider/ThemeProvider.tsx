"use client"

import { ThemeContext } from "@/context/ThemeContext"
import React, { useContext } from "react"

const ThemeProvider = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={theme}>{ children }</div>
  )
}

export default ThemeProvider
