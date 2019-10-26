import React from "react";
// import { mdiDocker } from '@mdi/js';
import StarIcon from '@material-ui/icons/Star';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarHalfIcon from '@material-ui/icons/StarHalf'
import ChatIcon from '@material-ui/icons/Chat';
const Qa = (props) => {
  
let stars = Math.floor(props.stars);
let remainder = Number(props.stars%1);
let divs = [];

for (let i =0 ; i< stars; i++) {
 divs.push(<StarIcon key={i}/>)
}
if (remainder > 0.2 && remainder < 0.8) {
 divs.push(<StarHalfIcon key={6}/>)
}
if (remainder > 0.8) {
 divs.push(<StarIcon key={6}/>)
}
while(divs.length < 5){
    divs.push(<StarBorderIcon key={6}/>)
  } 

  return (
  <div className={'cs-Juan-ref cs-qa-bar'}>

      <a href="#" className={"star-ratings"} styles={'color: blue; text-decoration: none !important;'}  onClick={function(){var elmnt = document.getElementById("productInfo"); elmnt.scrollIntoView();}}>
      
      <div className={'cs-subJuan'}>      
      <div className={'cs-categories'}>{props.revs} Reviews!</div>
      <div className={'cs-stars'}>

      <div className={'star-ratings'}>
         {divs}
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