import React from "react";
import StarRatings from 'react-star-ratings';
const Reviews = (props) => {
  
  return (
    
    <div>
        <StarRatings
          starRatedColor="blue"
          numberOfStars={5}
          name='rating'
          rating={3}
        />
    </div>

  )
}


export default Reviews