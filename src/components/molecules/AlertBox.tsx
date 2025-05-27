"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, AnimatePresence } from "framer-motion"
import { Icon } from "@/components/atoms/Icon"
import { Button } from "@/components/atoms/Button"
import { Typography } from "@/components/atoms/Typography"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4",
  {
    variants: {
      type: {
        info: "border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200",
        success: "border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-200",
        warning: "border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-200",
        error: "border-red-200 bg-red-50 text-red-900 dark:border-red-800 dark:bg-red-950 dark:text-red-200",
      },
    },
    defaultVariants: {
      type: "info",
    },
  }
)

const alertIcons = {
  info: "Info" as const,
  success: "CheckCircle" as const,
  warning: "AlertTriangle" as const,
  error: "AlertCircle" as const,
}

export interface AlertBoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {
  title: string
  message: string
  onClose?: () => void
  type: "info" | "success" | "warning" | "error"
}

const AlertBox = React.forwardRef<HTMLDivElement, AlertBoxProps>(
  ({ className, type, title, message, onClose, ...props }, ref) => {
    const [isVisible, setIsVisible] = React.useState(true)

    const handleClose = () => {
      setIsVisible(false)
      setTimeout(() => {
        onClose?.()
      }, 200)
    }

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div
              ref={ref}
              className={cn(alertVariants({ type }), className)}
              {...props}
            >
              <div className="flex items-start gap-3">
                <Icon name={alertIcons[type]} className="w-5 h-5 mt-0.5" />
                <div className="flex-1">
                  <Typography variant="h5" className="mb-1">
                    {title}
                  </Typography>
                  <Typography variant="p" className="text-sm">
                    {message}
                  </Typography>
                </div>
                {onClose && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-6 w-6 -mt-1 -mr-1"
                    onClick={handleClose}
                  >
                    <Icon name="X" className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
)
AlertBox.displayName = "AlertBox"

export { AlertBox }
