'use client'

import { useEffect, useState } from "react"
import { Button } from "@/registry/new-york/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button 
        variant="ghost" 
        size="icon" 
        disabled 
        className="transition-all duration-300"
      />
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      // 核心修改：添加悬浮效果样式
      className="h-10 w-10 rounded-full transition-all duration-300 hover:h-12 hover:w-12 hover:bg-primary/10 hover:shadow-md"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="切换主题"
    >
      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">切换主题</span>
    </Button>
  )
}
    