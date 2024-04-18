"use client"
import { createContext, useEffect, useState } from "react";
type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<{
  theme: ThemeContextType,
  toggle: () => void
}>({
  theme: "light",
  toggle: () => {}
})

const getFormLocalStroge = (): ThemeContextType => {
  if (typeof window === "undefined") return "light"
  const theme = localStorage.getItem('theme') as ThemeContextType
  return theme || "light"
}

export const ThemeContextProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const [theme, setTheme] = useState<ThemeContextType>(getFormLocalStroge())
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  )
}
