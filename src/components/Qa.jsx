import React from "react";
// import { mdiDocker } from '@mdi/js';

const Qa = (props) => {
  return (
  <div className={'cs-Juan-ref'}>
    <a href="#" className={"star-ratings"} onClick={function(){ console.log('scroll to juans component 2')}}>
      <div>10 Reviews!</div>
      <div className={'cs-subJuan'}>

      </div>
    </a>
    <ul className={'cs-subJuan'}>
      <div>
        Have an opinion?
      </div>
      Help others decide.
      <a href="#" className={'cs-subJuan'} onClick={function(){ console.log('scroll to juans component 3')}}>
        Write a Review
      </a>
    </ul>
    <ul className={'cs-subJuan'}>
      <img />
      <div>Community</div> 
      <div>Q&A</div> 
      <a href="#" className={'cs-subJuan'} onClick={function(){ console.log('scroll to juans component')}}>  
        View Now
      </a>
    </ul>
  </div>
 
  )
}


export default Qa