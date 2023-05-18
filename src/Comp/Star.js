import React from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  const renderStars = () => {
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="#FFD700" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key={fullStars} color="#FFD700" />);
    }

    while (stars.length < totalStars) {
      stars.push(<FaStar key={stars.length} color="#E4E5E9" />);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default StarRating;
