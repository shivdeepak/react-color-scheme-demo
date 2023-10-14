import { useEffect } from "react"
import useMediaQuery from "./useMediaQuery"
import { useLocalStorage } from "./useStorage"

export default function useDarkMode() {
  const [darkMode, setDarkMode, useSystemScheme] = useLocalStorage("useDarkMode")
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode
  const source = (darkMode == undefined) ? "system" : "user"

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled, source])

  return [enabled, source, setDarkMode, useSystemScheme]
}
