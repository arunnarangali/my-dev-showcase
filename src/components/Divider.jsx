import React from 'react'

const Divider = () => {
  return (
    <div className="flex items-center justify-center gap-4 mb-16">
    <div className="w-12 h-px bg-black"></div>
    <div className="flex gap-1">
      <div className="w-3 h-px bg-black transform rotate-45"></div>
      <div className="w-3 h-px bg-black transform -rotate-45"></div>
      <div className="w-3 h-px bg-black transform rotate-45"></div>
      <div className="w-3 h-px bg-black transform -rotate-45"></div>
    </div>
    <div className="w-12 h-px bg-black"></div>
  </div>
  )
}

export default Divider