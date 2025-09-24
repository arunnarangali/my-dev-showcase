import React, { useState } from 'react'
import SectionHeading from '../components/SectionHeading';
import PortfolioCard from '../components/PortfolioCard';
import banner from '../assets/images/portfolio-banner.png';


const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const portfolioItems = [
    {
      id: 1,
      image: '/portfolio/neon-hex-1.jpg',
      category: 'designed',
      type: 'design'
    },
    {
      id: 2,
      image: '/portfolio/eatsome-project.jpg',
      title: 'eatsome.',
      description: 'Restaurant browsing in React.js (Using Yelp API)',
      tags: 'coded, designed',
      demoLink: '#',
      moreLink: '#',
      category: 'coded',
      type: 'featured',
      featured: true
    },
    {
      id: 3,
      image: '/portfolio/forest-car-1.jpg',
      category: 'designed',
      type: 'photography'
    },
    {
      id: 4,
      image: '/portfolio/neon-circle.jpg',
      category: 'designed',
      type: 'design'
    },
    {
      id: 5,
      image: '/portfolio/forest-car-2.jpg',
      category: 'designed',
      type: 'photography'
    },
    {
      id: 6,
      image: '/portfolio/neon-hex-2.jpg',
      category: 'designed',
      type: 'design'
    }
  ];

  const filteredItems = portfolioItems.filter(item => {
    if (activeFilter === 'ALL') return true;
    return item.category.toUpperCase() === activeFilter;
  });

  const filters = ['ALL', 'CODED', 'DESIGNED'];

  return (
    <section id="portfolio" className="relative scroll-mt-24">
      {/* Hero Background */}
      <div className="relative h-64 bg-cover bg-center" 
           style={{backgroundImage: `url('${banner}')`}}>
        <div className="absolute inset-0 bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <SectionHeading title="PORTFOLIO" className="text-white" />
        </div>
      </div>

      {/* Main Portfolio Section */}
      <div className="bg-gray-900 min-h-screen">
        {/* Filter Tabs */}
        <div className="pt-12 pb-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-center">
              <div className="flex border-b border-gray-600">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-8 py-3 text-sm font-medium tracking-wider transition-colors ${
                      activeFilter === filter
                        ? 'text-white border-b-2 border-white'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`
                  ${index === 1 ? 'md:col-span-2 md:row-span-2' : ''}
                  ${item.featured ? 'h-80 md:h-full' : 'h-60'}
                `}
              >
                <PortfolioCard
                  image={item.image}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  demoLink={item.demoLink}
                  moreLink={item.moreLink}
                  featured={item.featured}
                  className="h-full"
                />
              </div>
            ))}
          </div>

          {/* Bottom Message */}
          <div className="text-center mt-16">
            <p className="text-white text-lg font-light">
              And many more to come!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio