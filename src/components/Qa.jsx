import React from "react";
// import { mdiDocker } from '@mdi/js';
import StarIcon from '@material-ui/icons/Star';
import StarIconBorder from '@material-ui/icons/StarBorder';
import ChatIcon from '@material-ui/icons/Chat';
const Qa = (props) => {
  return (
  <div className={'cs-Juan-ref'}>

      <a href="#" className={"star-ratings"} onClick={function(){ console.log('scroll to juans component 2')}}>
      
      <div className={'cs-subJuan'}>      
      <div >10 Reviews!</div>
      <div className={'cs-stars'}>

      <StarIcon className={'cs-stars'}>
      </StarIcon>
      <StarIconBorder>
      </StarIconBorder>
      <StarIconBorder>
      </StarIconBorder>
      <StarIconBorder>
      </StarIconBorder>
      <StarIconBorder>
      </StarIconBorder>
      </div>
      </div>
    </a>
    <ul className={'cs-subJuan'}>
      <div>
      Have an opinion? 
      <div>
      Help others decide.
      </div>
      <a href="#" className={'cs-stars'} onClick={function(){ console.log('scroll to juans component 3')}}>
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
        <a href="#" className={'cs-stars'} onClick={function(){ console.log('scroll to juans component')}}>  
        View Now
      </a>
      </div>
    </ul>
  </div>
 
  )
}


export default Qa