import { useEffect, useState } from "react"

import { useTheme } from "next-themes"
import { MoonIcon, SunIcon } from "@heroicons/react/solid"

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Check if the component is mounted first to avoid flashing
  const toggleTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light')
    }
  }

  return (
    <div
      onClick={toggleTheme}
      className="
        relative
        flex justify-between
        h-8 md:h-11 w-16 md:w-24 py-1 md:py-2 px-1 md:px-2
        rounded-full
        bg-primary-light dark:bg-inky-light
        transition-all duration-500
        cursor-pointer
      "
    >
      <MoonIcon className="absolute top-1 md:top-2 left-1 md:left-2 h-6 md:h-7 w-6 md:w-7 text-trueGray-300 opacity-0 dark:opacity-100 transition-all duration-500" />
      <SunIcon className="absolute top-1 md:top-2 right-1 md:right-2 h-6 md:h-7 w-6 md:w-7 text-amber-400 opacity-100 dark:opacity-0 transition-all duration-500" />

      <div
        className={`
          relative z-20
          h-6 md:h-7 w-6 md:w-7
          rounded-full
          bg-white
          shadow-md
          transform translate-x-0 dark:translate-x-8 md:dark:translate-x-[3.25rem]
          transition-all duration-500
        `}
      >
      </div>
    </div>
  )
}
