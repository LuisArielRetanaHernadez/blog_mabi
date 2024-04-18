"use client"
import { createContext, useState } from "react";
type ThemeContextType = "light" | "dark";
export const ThemeContext = createContext<ThemeContextType>("light")

const getFormLocalStroge = (): ThemeContextType => {
  const theme = localStorage.getItem('theme') as ThemeContextType
  return theme || "light"
}

export const ThemeContextProvider = ({ children }: Readonly<{children: React.ReactNode}>) => {
  const [theme, setTheme] = useState<ThemeContextType>(getFormLocalStroge())

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  )
}
