"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/atoms/Input"
import { Button } from "@/components/atoms/Button"
import { Icon } from "@/components/atoms/Icon"
import { cn } from "@/lib/utils"

export interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

const SearchBar = React.forwardRef<HTMLDivElement, SearchBarProps>(
  ({ placeholder = "検索...", onSearch, className, ...props }, ref) => {
    const [query, setQuery] = React.useState("")
    const [isFocused, setIsFocused] = React.useState(false)

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault()
      onSearch?.(query)
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value)
    }

    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        {...props}
      >
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative">
            <Icon 
              name="Search" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" 
            />
            <Input
              type="text"
              placeholder={placeholder}
              value={query}
              onChange={handleInputChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className={cn(
                "pl-10 pr-12 transition-all duration-200",
                isFocused && "ring-2 ring-primary"
              )}
            />
            {query && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              >
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-6 w-6"
                  onClick={() => setQuery("")}
                >
                  <Icon name="X" className="w-3 h-3" />
                </Button>
              </motion.div>
            )}
          </div>
        </form>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }
