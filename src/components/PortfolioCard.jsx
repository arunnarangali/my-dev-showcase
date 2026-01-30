const PortfolioCard = ({
  image,
  title,
  description,
  tags,
  demoLink,
  moreLink,
  featured = false,
  className = "",
}) => {
  if (featured) {
    return (
      <div
        className={`relative group cursor-pointer ${className} flex flex-col md:block shadow-lg md:shadow-none`}
      >
        <div className="relative h-60 md:h-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Desktop Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-80 hidden md:flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              {tags && (
                <p className="text-xs tracking-wider mb-2 text-cyan-400 font-medium">
                  {tags}
                </p>
              )}
              <h3 className="text-2xl font-light mb-3">{title}</h3>
              {description && (
                <p className="text-sm mb-6 max-w-xs text-gray-300">
                  {description}
                </p>
              )}
              <div className="flex gap-4 justify-center">
                {demoLink && (
                  <button className="border border-white px-6 py-2 text-xs tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    DEMO
                  </button>
                )}
                {moreLink && (
                  <button className="bg-white text-black px-6 py-2 text-xs tracking-widest border border-white hover:bg-transparent hover:text-white transition-all duration-300">
                    MORE
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Content Section */}
        <div className="md:hidden bg-gray-800 p-5 flex-grow flex flex-col justify-between border-t-4 border-cyan-500">
          <div>
            {tags && (
              <p className="text-xs font-bold tracking-widest text-cyan-400 mb-2 uppercase">
                {tags}
              </p>
            )}
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            {description && (
              <p className="text-sm text-gray-400 leading-relaxed mb-4">
                {description}
              </p>
            )}
          </div>

          <div className="flex gap-4 mt-2">
            {demoLink && (
              <button className="flex-1 border border-cyan-500 text-cyan-400 py-2 text-xs font-bold tracking-widest hover:bg-cyan-500 hover:text-white transition-colors">
                DEMO
              </button>
            )}
            {moreLink && (
              <button className="flex-1 bg-gray-700 text-white py-2 text-xs font-bold tracking-widest hover:bg-gray-600 transition-colors">
                DETAILS
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative group cursor-pointer overflow-hidden ${className}`}
    >
      <img
        src={image}
        alt={title || "Portfolio item"}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
    </div>
  );
};

export default PortfolioCard;
