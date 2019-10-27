import React from "react";
// import { mdiDocker } from '@mdi/js';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf'
import ChatIcon from '@material-ui/icons/Chat';
const Qa = (props) => {
  let rating = props.stars;
  console.log(rating);
  let star1 = <StarBorderIcon></StarBorderIcon>;
  let star2 = <StarBorderIcon></StarBorderIcon>;
  let star3 = <StarBorderIcon></StarBorderIcon>;
  let star4 = <StarBorderIcon></StarBorderIcon>;
  let star5 = <StarBorderIcon></StarBorderIcon>;

  if(rating >= 0.5){
    star1 = <StarIcon></StarIcon>;
  } 
   if (rating >= 1.5){
    star2 = <StarIcon></StarIcon>;
  } 
   if (rating >= 2.5){
    star3 = <StarIcon></StarIcon>;
  } 
   if (rating >= 3.5){
    star4 = <StarIcon></StarIcon>;
  } 
   if (rating >= 4.5){
    star5 = <StarIcon></StarIcon>;
  }


  return (
  <div className={'cs-Juan-ref cs-qa-bar'}>

      <a href="#" className={"star-ratings"} styles={'color: blue; text-decoration: none !important;'}  onClick={function(){var elmnt = document.getElementById("productInfo"); elmnt.scrollIntoView();}}>
      
      <div className={'cs-subJuan'}>      
      <div className={'cs-categories'}>{props.revs} Reviews!</div>
      <div className={'cs-stars'}>

      <div className={'star-ratings'}>
          {star1}
          {star2}
          {star3}
          {star4}
          {star5}
       </div>
         {props.stars}
      </div>
   </div>
    </a>
    <ul className={'cs-subJuan'} id={'borderWall'}>
      <div>
      Have an opinion? 
      <div>
      Help others decide.
      </div>
      <a href="#" className={'cs-stars'} onClick={function(){var elmnt = document.getElementById("productInfo"); elmnt.scrollIntoView();}}>
      Write a Review
      </a>
      </div>
    </ul>
    <ul className={'cs-subJuan'}>
      {/* <StarIcon>
      </StarIcon> */}
      <ChatIcon>
      </ChatIcon>
      <div className={'cs-subJuan'}>Community Q&A</div> 
      <div>
        <a href="#" className={'cs-stars'} onClick={function(){var elmnt = document.getElementById("productInfo"); elmnt.scrollIntoView();}}>  
        View Now
      </a>
      </div>
    </ul>
  </div>
 
  )
}


export default Qa