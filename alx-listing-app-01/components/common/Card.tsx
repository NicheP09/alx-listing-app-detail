import React from 'react';

export interface CardProps {
  title?: string;
  imageUrl?: string;
  description?: string;
}

const Card: React.FC<CardProps> = ({ title, imageUrl, description }) => {
  return (
    <div className="border rounded-lg shadow p-4">
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover rounded"
        />
      )}
      {title && <h2 className="text-lg font-bold mt-2">{title}</h2>}
      {description && <p className="text-sm mt-1">{description}</p>}
    </div>
  );
};

export default Card;
