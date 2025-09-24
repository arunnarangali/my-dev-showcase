import React from 'react'

const PortfolioCard = ({
  image, 
  title, 
  description, 
  tags, 
  demoLink, 
  moreLink, 
  featured = false,
  className = "" 
}) => {
  if (featured) {
    return (
      <div className={`relative group cursor-pointer ${className}`}>
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-center p-6">
            {tags && (
              <p className="text-xs tracking-wider mb-2 text-gray-300">
                {tags}
              </p>
            )}
            <h3 className="text-2xl font-light mb-3">{title}</h3>
            {description && (
              <p className="text-sm mb-6 max-w-xs">{description}</p>
            )}
            <div className="flex gap-4">
              {demoLink && (
                <button className="border border-white px-4 py-1 text-xs tracking-wider hover:bg-white hover:text-black transition-colors">
                  DEMO
                </button>
              )}
              {moreLink && (
                <button className="border border-white px-4 py-1 text-xs tracking-wider hover:bg-white hover:text-black transition-colors">
                  MORE
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group cursor-pointer overflow-hidden ${className}`}>
      <img 
        src={image} 
        alt={title || "Portfolio item"}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
    </div>
  );
}

export default PortfolioCard