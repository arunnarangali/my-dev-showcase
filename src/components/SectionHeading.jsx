import React from 'react'

const SectionHeading = ({title,className = "" }) => {
  return (
    <div className={`flex justify-center ${className}`}>
      <div className="border-2 px-8 py-3 border-black">
        <h2 className="text-lg font-bold tracking-[0.3em] ">
          {title}
        </h2>
      </div>
    </div>
  );
}

export default SectionHeading