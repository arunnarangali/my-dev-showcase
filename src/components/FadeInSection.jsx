import { useEffect, useRef, useState } from "react"

function FadeInSection({ children, className = "", as = "div", delay = 0 }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)
  const Component = as // Use a different name

  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { root: null, rootMargin: "0px", threshold: 0.15 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const transitionStyle = {
    transitionDelay: `${delay}ms`
  }

  return (
    <Component
      ref={containerRef}
      style={transitionStyle}
      className={[
        "transform transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      ].join(" ")}
    >
      {children}
    </Component>
  )
}

export default FadeInSection
