import React from 'react'

const SkillCard = ({icon, title, alt}) => {
  return (
    <div className="flex flex-col items-center text-center">
    <div className="w-16 h-16 mb-3 flex items-center justify-center">
      <img 
        src={icon} 
        alt={alt || title} 
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-xs font-medium tracking-wider text-black">
      {title}
    </span>
  </div>
  )
}

export default SkillCard