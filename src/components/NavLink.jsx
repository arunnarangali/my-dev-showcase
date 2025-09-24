import React from 'react'

const NavLink = ({ children, href = '#', className = '' }) => {
  const handleClick = (e) => {
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={[
        "text-sm font-medium text-white/80 hover:text-white transition",
        className
      ].join(' ')}
    >
      {children}
    </a>
  );
}

export default NavLink