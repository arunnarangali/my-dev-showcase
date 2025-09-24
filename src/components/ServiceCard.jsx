import React from 'react'

const ServiceCard = ({icon, title, description}) => {
  return (
    <div className="text-center max-w-sm">
      {icon && (
        <div className="flex justify-center mb-4">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-bold tracking-wider mb-4 text-black">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ServiceCard