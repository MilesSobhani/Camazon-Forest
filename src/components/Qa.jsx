import React from "react";
import StarRatings from 'react-star-ratings';
const Qa = (props) => {
  return (
    <div className={'cs-Juan-ref'}>
    <a href="#" className={"star-ratings"} onClick={function(){ console.log('scroll to juans component 2')}}>
      <div>10 Reviews!</div>
    <div className={'cs-Juan-ref'}>
        <StarRatings
          starRatedColor="blue"
          numberOfStars={5}
          name='rating'
          rating={props.stars}
          />
    </div>
  </a>
    <ul >
    <div>
      Have an opinion?
    </div>
      Help others decide.
    <a href="#" className={'cs-Juan-ref'} onClick={function(){ console.log('scroll to juans component 3')}}>
      Write a Review
    </a>
  </ul>
<ul>
<div>Community</div> 
<div>Q&A</div> 
<a href="#" className={'cs-Juan-ref'} onClick={function(){ console.log('scroll to juans component')}}>
View Now
</a>
 </ul>
</div>
 
  )
}


export default Qa