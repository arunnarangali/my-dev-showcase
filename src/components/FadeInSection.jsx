import { useEffect, useRef, useState } from "react"

// eslint-disable-next-line no-unused-vars
function FadeInSection({ children, className = "", as: Tag = "div", delay = 0 }) {
  const containerRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <Tag
      ref={containerRef}
      style={transitionStyle}
      className={[
        "transform transition-all duration-700 ease-out will-change-transform",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6",
        className
      ].join(" ")}
    >
      {children}
    </Tag>
  )
}

export default FadeInSection
