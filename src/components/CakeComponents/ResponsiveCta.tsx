import { ArrowRight } from "lucide-react"
import React from "react"
import clsx from "clsx"

type CtaProps = {
  label?: string
  variant?: "slide" | "expand"
  containerClass?: string
  textClass?: string
  circleClass?: string
  iconClass?: string
  hoverWidth?: string
  lefthoverSize: string
  leftcircle?: string
  rightcircle?: string
}

export const Cta3 = ({
  label = "Order Now",
  variant = "slide",
  containerClass,
  textClass,
  circleClass,
  iconClass,
  lefthoverSize,
  leftcircle,
  rightcircle,
}: CtaProps) => {
  const isSlide = variant === "slide"

  return (
    <div
      className={clsx(
        "cursor-pointer flex justify-between px-1 items-center rounded-full group",
        isSlide && "bg-white",
        containerClass
      )}
    >
      {/* Left circle */}
      <div
        className={clsx(
          "flex justify-center items-center rounded-full w-0 shrink-0 origin-left transition-all duration-300",
          isSlide
            ? "transform-[scale3d(0,0,0)] group-hover:transform-[scale3d(1,1,1)]"
            : "  transform-[scale3d(0,0,0)] group-hover:transform-[scale3d(1,1,1)]",
          circleClass,lefthoverSize,leftcircle
        )}
      >
        <ArrowRight
          className={clsx(
            "-rotate-45 group-hover:rotate-0 transition-transform duration-200",
            iconClass
          )}
        />
      </div>

      {/* Text */}
      <div
        className={clsx(
          "flex justify-center items-center w-full font-medium transition-transform duration-300",
          isSlide
            ? "transform-[translate3d(-2rem,0,0)] group-hover:transform-[translate3d(2rem,0,0)]"
            : " rounded-full h-full",
          textClass
        )}
      >
        {label}
      </div>

      {/* Right circle */}
      <div
        className={clsx(
          "flex justify-center items-center rounded-full shrink-0 origin-right transition-all duration-300",
          isSlide
            ? "group-hover:transform-[scale3d(0,0,0)]"
            : "group-hover:w-0 group-hover:transform-[scale3d(0,0,0)]",
          circleClass,rightcircle
        )}
      >
        <ArrowRight
          className={clsx(
            "-rotate-45 group-hover:rotate-0 transition-transform duration-200",
            iconClass
          )}
        />
      </div>
    </div>
  )
}