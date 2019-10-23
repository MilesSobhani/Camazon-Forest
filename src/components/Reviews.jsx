import React from "react";
import StarRatings from 'react-star-ratings';
const Reviews = (props) => {
  
  return (
    <a href="#" className={'cs-Juan-ref'} onClick={function(){ console.log('scroll to juans component 2')}}>
    <div>
        <StarRatings
          starRatedColor="blue"
          numberOfStars={5}
          name='rating'
          rating={3.5}
        />
    </div>
  </a>
  )
}


export default Reviews