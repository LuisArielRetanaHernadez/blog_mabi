"use client"
import { createContext, useState } from "react";
type ThemeContextType = "light" | "dark";

export const ThemeContext = createContext<{
  theme: ThemeContextType,
  toggle: () => void
}>({
  theme: "light",
  toggle: () => {}
})

const getFormLocalStroge = (): ThemeContextType => {
  const theme = localStorage.getItem('theme') as ThemeContextType
  return theme || "light"
}

export const ThemeContextProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const [theme, setTheme] = useState<ThemeContextType>(getFormLocalStroge())
  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }
  return (
    <ThemeContext.Provider value={{theme, toggle}}>
      {children}
    </ThemeContext.Provider>
  )
}
