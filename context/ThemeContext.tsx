"use client"
import { createContext, useState } from "react";

export const ThemeContext = createContext(null)

const getFormLocalStroge = () => {
  const theme = localStorage.getItem('theme')
  return theme || 'light'
}

export const ThemeContextProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const [theme, setTheme] = useState(getFormLocalStroge())

  return (
    <ThemeContext.Provider value={null}>
      {children}
    </ThemeContext.Provider>
  )
}
